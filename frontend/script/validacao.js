const emailInput2 = document.getElementById("EmailLogin");
const senhaInput = document.getElementById("SenhaLogin");

const EmailCadastro = document.getElementById("EmailCadastro");
const SenhaCadastro = document.getElementById("SenhaCadastro");
const ConfirmarSenhaCadastro = document.getElementById("ConfirmarSenhaCadastro");

function validarEmail(input){
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = input.value.trim();

    if (!padrao.test(email)){
        console.log("Erro1")
        swal({
            title: "Erro!",
            text: "Por favor, insira um email válido.",
            icon: "error"
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
        console.log("Erro2")
        swal({
            title: "Erro!",
            text: "A senha deve ter pelo menos 8 caracteres, com letra, número e símbolo.",
            icon: "error"
        });
        return false;
    }

    return true;
}

function validarCampos() {
    const email = emailInput2.value.trim();
    const senha = senhaInput.value.trim();

    if (email === '' || senha === '') {
        console.log("Erro3")
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
        console.log("Erro4")
        swal({
            title: "Erro!",
            text: "Preencha todos os campos.",
            icon: "error"
        });
        return false;
    }

    if (senha !== confirmar) {
        console.log("Erro5")
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

    if (!validarCampos()) return;
    if (!validarEmail(emailInput2)) return;
    if (!validarSenha(senhaInput)) return;

    swal({
            title: "Sucesso!",
            text: "Login realizado com sucesso!",
            icon: "success"
        });
    loginModal.classList.remove("active");
});

document.getElementById("formCadastro").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarCadastro()) return;    
    if (!validarEmail(EmailCadastro)) return;
    if (!validarSenha(SenhaCadastro)) return;

    swal({
            title: "Sucesso!",
            text: "Cadastro realizado com sucesso!",
            icon: "success"
        });
    cadastroModal.classList.remove("active");
});