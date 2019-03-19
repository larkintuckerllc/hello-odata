import { odata, ODataController } from 'odata-v4-server';
import { deleteTodo, findOneTodo, findTodos, insertTodo, updateTodo } from '../../todos';
import Todo from '../models/Todo';

@odata.type(Todo)
export default class TodosController extends ODataController {
  @odata.GET
  public async find(): Promise<Todo[]> {
    const todos = await findTodos();
    return todos;
  }

  @odata.GET
  public async findOne(@odata.key id: number): Promise<Todo> {
    const todo = await findOneTodo(id);
    return todo;
  }

  @odata.POST
  public async insert(@odata.body body: any): Promise<Todo> {
    // BUG: CANNOT BE EMPTY OBJECT
    const todo = await insertTodo(body);
    return todo;
  }

  @odata.PATCH
  public async update(@odata.key id: number, @odata.body body: any) {
    // BUG: CANNOT BE EMPTY OBJECT
    await updateTodo(id, body);
  }

  @odata.DELETE
  public async remove(@odata.key id: number) {
    await deleteTodo(id);
  }
}
