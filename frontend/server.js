const express = require("express");
const cors = require("cors");
const alunosRoutes = require("./routers/alunos_routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/alunos", alunosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});