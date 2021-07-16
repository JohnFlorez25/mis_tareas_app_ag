import { tareas } from "./tareas.js";
import { misTareas } from "./components/consultarTareas.js";
import { mostrarTarea } from "./components/mostrarTarea.js";
import { agregarTarea } from "./components/agregarTarea.js";
var opcion= 1;
do {
  opcion = Number(
    prompt(`Digite la opción a ejecutar:
        1. Mostrar todas las tareas
        2. Mostrar una tarea
        3. Agregar una tarea
        0. Salir`)
  );

  switch (opcion) {
    case 1:
      console.group("Mostrar todas las Tareas");
      //Invocando a la función misTareas
      misTareas(tareas);
      console.groupEnd();
      break;
    case 2:
      console.group("Mostrar una Tarea");
      //Invocando a la función mostrarTarea
      let miTarea = mostrarTarea(2, tareas);
      console.log(`Tarea Encontrada:
                Título: ${miTarea.titulo}
                Estado: ${miTarea.completado ? "Completo" : "Incompleto"}
                Fecha de creación: ${miTarea.fechaCreada}`);
      console.groupEnd();
      break;
    case 3:
        console.group("Agregando una nueva tarea");
        agregarTarea(tareas);
        console.groupEnd();
        break;

    case 0 :
        console.log("Gracias por usar nuestro gestor de tareas")
        break

    default:
        console.log("La opción no existe en nuestro menú")
      break;
  }
} while (opcion !== 0);


