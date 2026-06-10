const express = require("express");
const router = express.Router();

const alunosController = require("../controller/aluno_controller");
const validarAluno = require("../validations/aluno_validacao");

router.get("/", alunosController.listar);
router.post("/", validarAluno, alunosController.salvar);
router.delete("/:id", alunosController.excluir);
router.put("/:id", alunosController.atualizar);
module.exports = router;