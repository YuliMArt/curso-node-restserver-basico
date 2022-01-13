// instancia de roueter
// SOLO DEBE TENER LAS RUTAS
const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
} = require("../controllers/usuarios");
// SE ESPECIFICAN PARAMETROS DE LA URL CON NOMBRE DESEADO 
const router = Router();
router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.delete("/:id", usuariosDelete);
router.put("/:id", usuariosPut);

module.exports = router;
