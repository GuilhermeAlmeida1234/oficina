const express = require("express");
const router = express.Router();

const usuariosController = require("../controller/usuario-controller");
const validarUsuario = require("../validations/usuario_validation");

router.post("/", validarUsuario, usuariosController.salvar);
router.get("/", usuariosController.listar);
router.post("/login", usuariosController.login);
module.exports = router;