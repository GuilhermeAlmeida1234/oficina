const emailInput2 = document.getElementById("EmailLogin");
const senhaInput = document.getElementById("SenhaLogin");

const EmailCadastro = document.getElementById("EmailCadastro");
const SenhaCadastro = document.getElementById("SenhaCadastro");
const ConfirmarSenhaCadastro = document.getElementById("ConfirmarSenhaCadastro");

function validarEmail(input){
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = input.value.trim();

    if (!padrao.test(email)){
        swal({
            title: "Erro!",
            text: "Por favor, insira um email válido.",
            icon: "error",
            button: "OK"
        });
        return false;
    }
    return true;
}
function validarSenha(input) {
    if (!input || !input.value) return false;

    const padrao = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    const senha = input.value.trim();

    if (!padrao.test(senha)) {
        swal({
            title: "Erro!",
            text: "A senha deve ter pelo menos 8 caracteres, com letra, número e símbolo.",
            icon: "error",
            button: "OK"
        });
        return false;
    }

    return true;
}

function validarCampos() {
    const email = emailInput2.value.trim();
    const senha = senhaInput.value.trim();

    if (email === '' || senha === '') {
        swal({
            title: "Erro!",
            text: "Preencha todos os campos.",
            icon: "error",
            button: "OK"
        });
        return false;
    }

    return true;
}

function validarCadastro() {
    const email = EmailCadastro.value.trim();
    const senha = SenhaCadastro.value.trim();
    const confirmar = ConfirmarSenhaCadastro.value.trim();

    if (email === '' || senha === '' || confirmar === '') {
        swal({
            title: "Erro!",
            text: "Preencha todos os campos.",
            icon: "error",
            button: "OK"
        });
        return false;
    }

    if (senha !== confirmar) {
        swal({
            title: "Erro!",
            text: "As senhas não coincidem.",
            icon: "error",
            button: "OK"
        });
        return false;
    }

    return true;
}

document.getElementById("formLogin").addEventListener("submit", async (e) => {

    e.preventDefault();

    if (!validarCampos()) return;
    if (!validarEmail(emailInput2)) return;

    const usuario = {

        email: emailInput2.value,

        senha: senhaInput.value

    };

    try {

        const resposta =
            await fetch(
                "http://localhost:3000/usuarios/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                        "application/json"
                    },
                    body: JSON.stringify(usuario)
                }
            );

        const resultado =
            await resposta.json();

        if (resultado.autenticado) {

            swal({
                title: "Sucesso!",
                text: "Login realizado!",
                icon: "success"
            });

        } else {

            swal({
                title: "Erro!",
                text: "Email ou senha inválidos.",
                icon: "error"
            });

        }

    } catch (erro) {

        console.error(erro);

    }

});

document.getElementById("formCadastro").addEventListener("submit", async (e) => {

    e.preventDefault();

    if (!validarCadastro()) return;
    if (!validarEmail(EmailCadastro)) return;
    if (!validarSenha(SenhaCadastro)) return;

    const usuario = {
        nome: document
            .getElementById("NomeCadastro")
            .value,

        email: EmailCadastro.value,

        senha: SenhaCadastro.value
    };

    try {

        const resposta = await fetch(
                "http://localhost:3000/usuarios",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                        "application/json"
                    },
                    body: JSON.stringify(usuario)
                }
            );

        const resultado =
            await resposta.json();

        console.log(resultado);

        swal({
            title: "Sucesso!",
            text: "Cadastro realizado!",
            icon: "success"
        });

    } catch (erro) {

        console.error(erro);

    }

});