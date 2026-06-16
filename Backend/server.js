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

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco MySQL do Aiven:');
        console.log(erro.message);
        return
    }

    console.log('Conexão realizada com sucesso!');
    console.log('Conectado ao banco MySQL do Aiven.');

    conexao.query('SELECT NOW () AS data_hora_atual', (erro, resultados))
        if (erro) {
            console.log('Erro ao executar consulta:');
            console.log(erro.message);
            conexao.end();
            return;
        }

        console.log('Consulta executada com sucesso!');
        console.log('Data e hora retornada pelo banco:');
        console.log(resultados[0].data_hora_atual);

        conexao.end();
})