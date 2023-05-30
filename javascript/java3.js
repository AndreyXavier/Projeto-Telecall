// criando uma mensagem com o nome do usuário
let logado = JSON.parse(localStorage.getItem('logado')) 

let loga = document.querySelector('#loga')

loga.innerHTML = `Bem-Vindo, ${logado.Login}`


// função dark mode
function darkMode() {
    var element = document.body;
    element.className = "dark-mode";

    var theme;
    
    if (element.classList.contains("dark-mode")) {
        theme = "Dark";
    }

    // salvando tema no LocalStorage
    localStorage.setItem("Tema", JSON.stringify(theme));

}

// função modo claro
function lightMode() {
    var element = document.body;
    element.className = "light-mode";

    var theme;

    if (element.classList.contains("light-mode")) {
        theme = "Light";
    }

    // salvando tema no LocalStorage
    localStorage.setItem("Tema", JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("Tema"))

if (getTheme == "Dark") {
    document.body.classList = "dark-mode";
} else {
    document.body.classList = "light-mode";
}