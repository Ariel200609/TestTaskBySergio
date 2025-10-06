import {Router} from 'express';
import TaskController from './../controllers/tasks.controller';
const taskRoute = Router();

taskRoute.get("/",TaskController.getTasks)
taskRoute.get("/:id",TaskController.getTask)
taskRoute.post("/",TaskController.addTask)
taskRoute.delete("/:id",TaskController.deleteTask)
taskRoute.put("/:id",TaskController.editTask)
taskRoute.patch("/:id",TaskController.cumplirPostergar)
taskRoute.get("/size",TaskController.size)

export default taskRoute;