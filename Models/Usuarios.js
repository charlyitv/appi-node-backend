const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
);

const Usuario = mongoose.model('Usuario', UsuariosSchema);

module.exports = Usuario;
