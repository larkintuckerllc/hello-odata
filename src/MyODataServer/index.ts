import { odata, ODataServer } from 'odata-v4-server';
import TodosController from './controllers/TodosController';

@odata.namespace('My')
@odata.controller(TodosController, true)
export default class MyODataServer extends ODataServer {}
