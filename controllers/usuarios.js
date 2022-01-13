const { response,request } = require("express");

// 
const usuariosGet = (req=request, res = response) => {
    const body = req.body;
    const {q,yuu,name='na'} = req.query;
  res.json({
    mag: "get api -controller",
    body,
   q,
   yuu,
   name

    
  });
};

const usuariosPost = (req, res = response) => {
  res.json({
    mag: "post api controller",
  });
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
  res.json({
    mag: "Put api -controller",
    id
  });
};
const usuariosDelete = (req, res = response) => {
    const id = req.params.id;

  res.json({
    mag: "Delete api -controller",
    id
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
};
