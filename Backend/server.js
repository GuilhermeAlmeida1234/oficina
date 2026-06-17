const express = require("express");
const cors = require("cors");
const oficinaRoutes = require("./routers/oficina_routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", oficinaRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

const conexao = require('./database/conexao');