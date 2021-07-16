import { tareas } from './tareas.js';
import { misTareas } from './components/consultarTareas.js';
import { mostrarTarea } from './components/mostrarTarea.js';

console.group("Mostrar todas las Tareas")
//Invocando a la función misTareas
misTareas(tareas);
console.groupEnd();

console.group("Mostrar una Tarea")
//Invocando a la función mostrarTarea
let miTarea = mostrarTarea(2, tareas);
console.log(`Tarea Encontrada:
        Título: ${miTarea.titulo}
        Estado: ${miTarea.completado ? "Completo" : "Incompleto"}
        Fecha de creación: ${miTarea.fechaCreada}`)
console.groupEnd();

