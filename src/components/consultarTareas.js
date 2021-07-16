function consultarTareas(tareas) {
    tareas.forEach( (tarea, index) => {
        return console.log(`Tarea Número ${index+1} :
        Título: ${tarea.titulo}
        Estado: ${tarea.completado ? "Completo" : "Incompleto"}
        Fecha de creación: ${tarea.fechaCreada}`)
    });
} 


export { consultarTareas as misTareas}