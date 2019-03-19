import { Edm } from 'odata-v4-server';

export default class Todo {
  @Edm.Key
  @Edm.Int32
  /* tslint:disable-next-line */
  public _id: number;

  @Edm.String
  public name: string;

  @Edm.Boolean
  public isComplete: boolean;
}
