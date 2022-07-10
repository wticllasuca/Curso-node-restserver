const {response}= require('express')

const usuariosGet = (request,response)=>{
    const query = request.query;
    response.json({
        msg:'get Api - controlador',
        query
    })
}
const usuariosPut =(request,response)=>{
    const id = request.params.id
    response.json({
        msg:'put api - controller',
        id
    })
}
const usuariosPost=(request,response)=>{

    const body = request.body;
    response.json({
        msg:'POST api - CONTROLLER',
        body
    })
}
const usuariosDelete=(request,response)=>{
    response.json({
        msg:'DELETE api - controller '
    })
}

module.exports = {

    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}