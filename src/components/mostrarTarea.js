export function mostrarTarea(idTarea, tareas){
    return tareas.find(tarea => tarea.id === idTarea)
}

console.groupEnd();