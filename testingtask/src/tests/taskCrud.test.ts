import { Task } from "./../models/task";
import TaskService from "./../services/tasks.service";

let tarea0: Task;
beforeAll (()=>{
    tarea0 = new Task("tarea de prueba")
})
let id: string;
beforeEach (async()=>{
    tarea1 = new Task("tarea dummy")
    const nuevaTarea =await TaskService.addTask(tarea1);
    id = nuevaTarea.getId();
})
describe("Servicios de las Tasks",()=>{

    test("Ver tareas de la base de datos",async()=>{
        const tareas = await TaskService.getTasks();
        expect(tareas.length).toBe(1);
})
    test("agregar una tarea a la base de datos",async()=>{
        const tareaAgregada = await TaskService.addTask(tarea0);
        expect(tareaAgregada.getTarea()).toBe("tarea de prueba");
    })
    test("verificar que la base de datos tenga una tarea",async()=>{
        const tareas = await TaskService.getTasks();
        expect(tareas.length).toBe(2);
    })
    test("getTesk",async()=>{
        const id = tarea0.getId();
        const tarea = await TaskService.getTask(id);
        expect(tarea.getId()).toBe(id);
    })
    test("editar el nombre de la tarea",async()=>{
        const id = tarea0.getId();
        const tareaEditada = await TaskService.editTaskName(id,"tarea editada");
        expect(tareaEditada.getTarea()).toBe("tarea editada");
    })
    test("cumplir una tarea",async()=>{
        const id = tarea0.getId();
        const tareaEditada = await TaskService.cumplirPostergar(id,true);
        expect(tareaEditada.isCumplido()).toBe(true);
    })
    test("postergar una tarea",async()=>{
        const id = tarea0.getId();
        const tareaEditada = await TaskService.cumplirPostergar(id,false);
        expect(tareaEditada.isCumplido()).toBe(false);
    })
    test("editar una tarea",async()=>{
        const id = tarea0.getId();
        const tareaEditada = await TaskService.editTask(id,"tarea editada",true);
        expect(tareaEditada.getTarea()).toBe("tarea editada");
        expect(tareaEditada.isCumplido()).toBe(true);
    })
    test ("size",()=>{
        const size = TaskService.size();
        expect(size).toBe(2);
    })
});

afterEach(()=>{
    TaskService.deleteTask(id);
})


let tarea1: Task;
beforeEach (()=>{
    tarea1 = new Task("tarea dummy")
})


describe("priebas de la clase task",()=>{
    //preparar lo que necesito\
    //arrange
    const tarea1 = new Task("ir a correr")
    //actuar 
    //act
    tarea1.setCumplido(true)
    //probar la hipotesis
    //assert
    // A ESTO SE LO CONOCE COMO el patron AAA (ARRANGE, ACT, ASSERT)
    test("cuadno realiza la tarea debe dar true",()=>{
        expect(tarea1.isCumplido()).toBe(true)
    })
    test("obtener el id de la tarea",()=>{
        tarea1.setId("1234")
        expect(tarea1.getId()).toBe("1234")
    })
    test("obtener la descripcion de la tarea",()=>{
        expect(tarea1.getTarea()).toBe("ir a correr")
    })

    test("actualizar la descripcion de la tarea",()=>{
        tarea1.setTarea("ir a caminar")
        expect(tarea1.getTarea()).toBe("ir a caminar")
    })
    
})

