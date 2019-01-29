const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado de tus tareas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tareacle', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}