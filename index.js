const express = require('express');
const mongoose = require('mongoose');
const usuariocontroler= require('./Controllers/UsuarioControllers');

const app = express();
const usuario= require('./Models/Usuarios');


app.use(express.json());

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://charly:hola12334@cluster0.66hfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));

//Datos simulados
let items = [
    { id:1, nombre: "calculadora"},
    { id:2, nombre: "impresora"},
    { id:3, nombre: "monitor"} 
];

// ENDPOINT
app.get ('/api/items',(req, res) => {
    res.json(items);
});
app.post ('/api/users', usuariocontroler.crearusuario);
app.get ('/api/users', usuariocontroler.traerusuario);
app.delete ('/api/users', usuariocontroler.borrarusario);
app.listen(3000,()=>{
    console.log("Servidor corriendo en localhost:3000");
});

