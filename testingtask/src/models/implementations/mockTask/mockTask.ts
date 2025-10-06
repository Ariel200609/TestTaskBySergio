import { TaskCrud } from "../../interface/taskCrud.interface";
import { Task } from "../../task";

export class MockTask implements TaskCrud {
    protected tam: number;
    protected container: Array<Task>;
    protected id: number;
    constructor() {
        this.id = 1;
        this.tam = 0;
        this.container = new Array<Task>();
    }
    editTaskName(id: string, tarea: string): Promise<Task> {
        return new Promise <Task>((resolve, reject) => {
        const tareaEntontrada = this.container.find(
            (tarea: Task) => tarea.getId() === id
        );
        if (!tareaEntontrada) {
            reject(new Error("no esta la tarea"));
        }else{
            tareaEntontrada.setTarea(tarea);
            resolve(tareaEntontrada);
        }
        });
    }
    cumplirPostergar(id: string, cumplida: boolean): Promise<Task> {
        return new Promise <Task>((resolve, reject) => {
        const tareaEntontrada = this.container.find(
            (tarea: Task) => tarea.getId() === id
        );
        if (!tareaEntontrada) {
        reject(new Error("no esta la tarea"));
        }else{
        if (tareaEntontrada.isCumplido()) {
        tareaEntontrada.setCumplido(false);
        } else {
        tareaEntontrada.setCumplido(true);
        }
        resolve(tareaEntontrada);
        }
    });
    }
    editTask(id: string, tarea: string, cumplida: boolean): Promise<Task> {
    return new Promise <Task>((resolve, reject) => {
        const tareaEntontrada = this.container.find(
            (tarea: Task) => tarea.getId() === id
        );
        if (!tareaEntontrada) {
            reject(new Error("no esta la tarea"));
        }else{
            tareaEntontrada.setTarea(tarea);
            tareaEntontrada.setCumplido(cumplida);
            resolve(tareaEntontrada);
        }
        });
    }
    size(): number {
        return this.tam;
    }
    getTasks(): Promise <Array<Task>> {
        return new Promise <Array<Task>>((resolve)=> {
            resolve(this.container);
        });
    }
    getTask(id: string): Promise <Task> {
        return new Promise <Task>((resolve, reject) => {
        const resultado = this.container.find((task: Task) => {
        return task.getId() === id;
        });
        if (!resultado) {
        reject(new Error("no ta"));
        }else{
            resolve(resultado);
        }
        });
    }
    addTask(tarea: Task): Promise <Task> {
        return new Promise <Task>((resolve) => {
        tarea.setId(this.id + "");
        this.container.push(tarea);
        this.id++;
        this.tam++;
        resolve(tarea);
    });
    }
    deleteTask(id: string): Promise <void> {
        return new Promise <void>((resolve, reject) => {
        const index = this.container.findIndex((tarea: Task) => tarea.getId() === id);
        if (index === -1) {
        reject(new Error("el elemento no se encuentra"));
        }else{
        this.container.splice(index, 1);
        this.tam--;
        }
    });
    }
}
export default new MockTask();
