import { Request, Response } from "express";
import TasksService from "../services/tasks.service";
import {Task} from "./../models/task"
class TasksController {
  public async getTask(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.status(402).json({
        message: "id no definido",
      });
    } else {
      try {
        const task = await TasksService.getTask(id);
        res.status(200).json(task);
      } catch (error) {
        if (error instanceof Error)
          res.status(404).json({
            message: error.message,
          });
      }
    }
  }
  public async getTasks(req: Request, res: Response){
    const tareas = await TasksService.getTasks();
    res.status(200).json(tareas);
  }
  public async addTask (req: Request, res: Response){
    const {tarea,cumplida} = req.body
    const nuevaTarea = await TasksService.addTask(new Task(tarea,cumplida));
    res.status(202).json(nuevaTarea);
  }
  public async deleteTask (req: Request, res: Response){
    const id = req.params.id;
      if (!id) {
      res.status(402).json({
        message: "id no definido",
      });
    }else{
      try{
        TasksService.deleteTask(id);
        res.status(200).json({
          message: "tarea eliminada"
        });
      }catch(error){
        if (error instanceof Error)
        res.status(404).json({
          message: error.message,
        });
      }
    }
  }
  public async editTaskName (req: Request, res: Response){
    const id = req.params.id;
    const name = req.body.name;
      if (!id) {
      res.status(402).json({
        message: "id no definido",
      });
      if (!name) {
        res.status(402).json({
          message: "tarea incorrecta",
        });
      }
    }else{
    try {
      const tareaModificada = await TasksService.editTaskName(id,name);
      res.status(200).json(tareaModificada);
    } catch (error) {
      if (error instanceof Error)
        res.status(404).json({
        message: error.message,
      });
  }
    }
  }
  public async cumplirPostergar (req: Request, res: Response){
    const id = req.params.id;
    const cumplida = req.body.cumplida;
      if (!id) {
      res.status(402).json({
        message: "id no definido",
      });
      if (!cumplida) {
        res.status(402).json({
          message: "tarea incorrecta",
        });
      }
    }else{
    try {
      const tareaModificada = await TasksService.cumplirPostergar(id,cumplida);
      res.status(200).json(tareaModificada);
    } catch (error) {
      if (error instanceof Error)
        res.status(404).json({
        message: error.message,
      });
  }
    }
  }
  public async editTask (req: Request, res: Response){
    const id = req.params.id;
    const cumplida = req.body.cumplida;
    const name = req.body.name;
      if (!id  || !name || !cumplida) {
      res.status(402).json({
        message: "error al ingresar datos",
      });
    }else{
    try {
      const tareaModificada = await TasksService.editTask(id,name,cumplida);
      res.status(200).json(tareaModificada);
    } catch (error) {
      if (error instanceof Error)
        res.status(404).json({
        message: error.message,
      });
  }
    }
  }
  public size (req: Request, res: Response){
    res.status(200).json({size: TasksService.size()});
  }
}

export default new TasksController();
