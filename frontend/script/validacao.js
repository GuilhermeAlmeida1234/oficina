const emailInput = document.getElementById("EmailLogin");
const senhaInput = document.getElementById("SenhaLogin");

const EmailCadastro = document.getElementById("EmailCadastro");
const SenhaCadastro = document.getElementById("SenhaCadastro");
const ConfirmarSenhaCadastro = document.getElementById("ConfirmarSenhaCadastro");

function validarSenha(input) {
    if (!input || !input.value) return false;

    const padrao = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    const senha = input.value.trim();

    if (!padrao.test(senha)) {
        swal({
            title: "Erro!",
            text: "A senha deve ter pelo menos 8 caracteres, com letra, número e símbolo.",
            icon: "error"
        });
        return false;
    }

    return true;
}

function validarLogin() {
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (email === '' || senha === '') {
        swal({
            title: "Erro!",
            text: "Preencha todos os campos.",
            icon: "error"
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
            icon: "error"
        });
        return false;
    }

    if (senha !== confirmar) {
        swal({
            title: "Erro!",
            text: "As senhas não coincidem.",
            icon: "error"
        });
        return false;
    }

    return true;
}

document.getElementById("formLogin").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarLogin()) return;
    if (!validarSenha(senhaInput)) return;

    console.log("Login válido");
});

document.getElementById("formCadastro").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarCadastro()) return;
    if (!validarSenha(SenhaCadastro)) return;

    console.log("Cadastro válido");
});