const express = require("express");
const router = express.Router();

const usuariosController = require("../controller/aluno_controller");
const validarUsuario = require("../validations/usuario_validation");

router.post("/", validarUsuario, alunosController.salvar);
module.exports = router;