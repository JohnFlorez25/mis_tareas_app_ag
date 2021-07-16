import { Tarea } from '../Tarea.js';

export function agregarTarea(tareas){
    let id = prompt("Ingrese identificador de la tarea")
    let titulo = prompt("Ingrese el título");
    let fechaCreada = prompt("Ingrese la fecha")

    let nuevaTarea = new Tarea(titulo, false, fechaCreada, id);

    console.log(nuevaTarea);

    tareas.push(nuevaTarea);
}