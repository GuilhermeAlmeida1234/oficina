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

document.getElementById("formLogin").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarCampos()) return;
    if (!validarEmail(emailInput2)) return;
    if (!validarSenha(senhaInput)) return;

    swal({
            title: "Sucesso!",
            text: "Login realizado com sucesso!",
            icon: "success",
            button: "OK"
        });
        
    document.querySelector(".swal-button").addEventListener("click", (e) => {
        loginModal.classList.remove("active");
        formLogin.reset();
    })
});

document.getElementById("formCadastro").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarCadastro()) return;    
    if (!validarEmail(EmailCadastro)) return;
    if (!validarSenha(SenhaCadastro)) return;

    swal({
            title: "Sucesso!",
            text: "Cadastro realizado com sucesso!",
            icon: "success",
            button: "OK"
        });

    document.querySelector(".swal-button").addEventListener("click", (e) => {
        cadastroModal.classList.remove("active");
        formCadastro.reset();

    })
});