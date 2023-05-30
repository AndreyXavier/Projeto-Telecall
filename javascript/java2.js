// criando uma função para validar os campos do meu formulário
function entra(){
    let login = document.querySelector('#log')
    let senha = document.querySelector('#senha2')

    if (login.value == "") {
        login.focus()
        return false
    }
    if (senha.value == "") {
        senha.focus()
        return false
    }

    // pegando os ids dos meus avisos
    let aviso11 = document.getElementById('aviso11')
    mensagem = ""
    let lista = []

    let valid = {
        Login: '',
        Senha: ''
    }

// pegando os valores do login e senha do meu cadastro no LocalStorage, para validar o login na área do cliente
    lista = JSON.parse(localStorage.getItem('lista'))

    lista.forEach((item) => {
        if (login.value == item.loginCad && senha.value == item.senhaCad) {

            valid = {
                Login: item.loginCad,
                Senha: item.senhaCad
            }

        }

    })

    // adicionando as validações nos campos
    if (login.value == "") {
        login.focus()
        return false
    }
    if (senha.value == "") {
        senha.focus()
        return false
    }
    
    if (login.value != valid.Login && senha.value != valid.Senha) {
        mensagem = "<link rel=stylesheet href= https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css>"
        mensagem = "<i class=bi-exclamation-circle> Login ou senha incorretos!</i> "
        aviso11.innerHTML = mensagem
        return false
    } else {
        localStorage.setItem('logado', JSON.stringify(valid))
    }
    
     
}