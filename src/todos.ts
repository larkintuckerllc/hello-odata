interface Todo {
  _id: number;
  name: string;
  isComplete: boolean;
}

interface PartialTodo {
  name?: string;
  isComplete?: boolean;
}

const todos = [
  {
    _id: 0,
    isComplete: false,
    name: 'A',
  },
  {
    _id: 1,
    isComplete: false,
    name: 'B',
  },
] as Todo[];

let lastId = 2;

export const findTodos = () =>
  new Promise<Todo[]>(resolve => {
    resolve(todos);
  });

export const findOneTodo = (id: number) =>
  new Promise<Todo>((resolve, reject) => {
    const todo = todos.find(element => element._id === id);
    if (todo === undefined) {
      reject();
    }
    resolve(todo);
  });

export const insertTodo = ({ isComplete = false, name = '' }: PartialTodo) =>
  new Promise<Todo>(resolve => {
    lastId += 1;
    const todo = {
      _id: lastId,
      isComplete,
      name,
    };
    todos.push(todo);
    resolve(todo);
  });

export const updateTodo = (id: number, { isComplete, name }: PartialTodo) =>
  new Promise((resolve, reject) => {
    const index = todos.findIndex(element => element._id === id);
    if (index === -1) {
      reject();
      return;
    }
    const prevTodo = todos[index];
    const todo = {
      _id: prevTodo._id,
      isComplete: isComplete !== undefined ? isComplete : prevTodo.isComplete,
      name: name !== undefined ? name : prevTodo.name,
    };
    todos[index] = todo;
    resolve();
  });

export const deleteTodo = (id: number) =>
  new Promise((resolve, reject) => {
    const index = todos.findIndex(element => element._id === id);
    if (index === -1) {
      reject();
      return;
    }
    todos.splice(index, 1);
    resolve();
  });
