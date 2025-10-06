import {Router} from 'express';
import TaskControler from './../controllers/tasks.controller';
const taskRoute = Router();

taskRoute.get("/",TaskControler.getTasks)
taskRoute.post("/",TaskControler.addTask)
export default taskRoute;