const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.post('/alumno', (req, res) => {
    if(req.body.id)
        res.send(`Hola ${alumnos[req.body.id - 1].nombre} ${alumnos[req.body.id - 1].apellido}`);
    else
        res.send('No se ha especificado el id del alumno');
})

app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${port}`)
})

const alumnos = [
    {nombre: "Pedro", apellido: "Perez"},
    {nombre: "Rosa", apellido: "Vazquez"},
    {nombre: "Susana", apellido: "Ochia"}
];