const express = require("express");
const router = express.Router();

const autenticar = require("../middlewares/autenticar");
const usuariosController = require("../controller/usuario-controller");
const validarUsuario = require("../validations/usuario_validation");
const admin = require("../middlewares/admin");


router.post("/", validarUsuario, usuariosController.salvar);
router.get("/", autenticar, admin, usuariosController.listar);
router.post("/login", usuariosController.login);
module.exports = router;