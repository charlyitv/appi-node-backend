const Usuario=require('../Models/Usuarios');

const crearusuario = async (req, res)=>{

    try{

        const nvoUsuario = new Usuario (
            {
                usuario:req.body.usuario,
                password:req.body.password
            }
            
        );
        
        await nvoUsuario.save();

        res.status(200).send('Guardado')
    
    }
    catch(error){
        res.status(500).send('Error al crear usuario')
    }
}
const traerusuario=async (req, res)=>{
    try {
        const users= await Usuario.find();
        res.json(users)
    } catch (error) {
        res.status(500).send('error al obtener usario')
    }
    
};
const borrarusario= async(req, res)=>{
    try {
        const users= await Usuario.find();
        res.json(users)
    } catch (error) {
        res.status(500).send('error al obtener usario')
    }
}

module.exports={
    crearusuario, traerusuario, borrarusario
}

