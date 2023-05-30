// criando uma função para validar os campos do meu formulário
function validar(){
    var formulario = document.forms["form"]
    var nome = formulario.nome.value
    var data = formulario.data.value
    var sexo = formulario.sexo.value
    var nome1 = formulario.nome1.value
    var CPF = formulario.CPF.value
    var tel = formulario.tel.value
    var cep = formulario.cep.value
    var rua = formulario.rua.value
    var num = formulario.num.value
    var bairro = formulario.bairro.value
    var cid = formulario.cid.value
    var uf = formulario.uf.value
    var comp = formulario.comp.value
    var login = formulario.login.value
    var senha = formulario.senha.value
    var senha1 = formulario.senha1.value

    // pegando os ids dos meus avisos
    var aviso1 = document.getElementById('aviso1') 
    var aviso2 = document.getElementById('aviso2')
    var aviso3 = document.getElementById('aviso3')
    var aviso4 = document.getElementById('aviso4')
    var aviso5 = document.getElementById('aviso5')
    var aviso6 = document.getElementById('aviso6')
    var aviso7 = document.getElementById('aviso7')
    var aviso8 = document.getElementById('aviso8')
    var aviso9 = document.getElementById('aviso9')
    var aviso10 = document.getElementById('aviso10')
    var aviso12 = document.getElementById('aviso12')
    var aviso13 = document.getElementById('aviso13')
    var aviso14 = document.getElementById('aviso14')
    var aviso15 = document.getElementById('aviso15')
    var aviso16 = document.getElementById('aviso16')
    var aviso17 = document.getElementById('aviso17')

    var mensagem = ''

    // adicionando as validações nos campos

    if (nome == ""){
        mensagem = "<i class=bi-exclamation-circle> Preencha o campo nome</i>"
        aviso1.innerHTML = mensagem
        formulario.nome.focus()
        return false
    }  else {
        mensagem = ""
        aviso1.innerHTML = mensagem
    } 
    if (nome.length < 15) {
        mensagem = "<i class=bi-exclamation-circle> Deve ter no mínimo 15 caracteres!</i>"
        aviso1.innerHTML = mensagem
        formulario.nome.focus()
        return false
    }
    
    if (data == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo Data</i>"
        aviso2.innerHTML = mensagem
        formulario.data.focus()
        return false
    } else {
        mensagem = ""
        aviso2.innerHTML = mensagem
    }

    if (sexo == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo Sexo</i>"
        aviso3.innerHTML = mensagem
        return false
    } else {
        mensagem = ""
        aviso3.innerHTML = mensagem
    }

    if (nome1 == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo Nome Materno</i> "
        aviso4.innerHTML = mensagem
        formulario.nome1.focus()
        return false
    } else {
        mensagem = ""
        aviso4.innerHTML = mensagem
    }

    if (CPF == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo CPF</i>"
        aviso5.innerHTML = mensagem
        formulario.CPF.focus()
        return false
    } else {
        mensagem = ""
        aviso5.innerHTML = mensagem
    }
    if (CPF.length != 14) {
        formulario.CPF.focus()
        return false
    }
    
    if (tel == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso6.innerHTML = mensagem
        formulario.tel.focus()
        return false
    } else {
        mensagem = ""
        aviso6.innerHTML = mensagem
    }
    if (tel.length < 14 || tel.length > 15) {
        mensagem = "<i class= bi-exclamation-circle> Celular ou Telefone Fixo inválidos!</i>"
        aviso6.innerHTML = mensagem
        formulario.tel.focus()
        return false
    }

    if (cep == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo CEP</i>"
        aviso7.innerHTML = mensagem
        formulario.cep.focus()
        return false
    } else {
        mensagem = ""
        aviso7.innerHTML = mensagem
    }

    if (rua == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso12.innerHTML = mensagem
        formulario.rua.focus()
        return false
    } else {
        mensagem = ""
        aviso12.innerHTML = mensagem
    }

    if (num == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso13.innerHTML = mensagem
        formulario.num.focus()
        return false
    } else {
        mensagem = ""
        aviso13.innerHTML = mensagem
    }

    if (bairro == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso14.innerHTML = mensagem
        formulario.bairro.focus()
        return false
    } else {
        mensagem = ""
        aviso14.innerHTML = mensagem
    }

    if (cid == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso15.innerHTML = mensagem
        formulario.cid.focus()
        return false
    } else {
        mensagem = ""
        aviso15.innerHTML = mensagem
    }

    if (uf == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso16.innerHTML = mensagem
        formulario.uf.focus()
        return false
    } else {
        mensagem = ""
        aviso16.innerHTML = mensagem
    }

    if (comp == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso17.innerHTML = mensagem
        formulario.comp.focus()
        return false
    } else {
        mensagem = ""
        aviso17.innerHTML = mensagem
    }

    if (login == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo Login</i>"
        aviso8.innerHTML = mensagem
        formulario.login.focus()
        return false
    } else {
        mensagem = ""
        aviso8.innerHTML = mensagem
    }
    if (login.length != 6) {
        mensagem = "<i class= bi-exclamation-circle> Deve ter 6 caracteres alfabéticos!</i>"
        aviso8.innerHTML = mensagem
        formulario.login.focus()
        return false
    }

    if (senha == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha o campo Senha</i>"
        aviso9.innerHTML = mensagem
        formulario.senha.focus()
        return false
    } else {
        mensagem = ""
        aviso9.innerHTML = mensagem
    }
    if (senha.length != 8) {
        mensagem = "<i class= bi-exclamation-circle> Deve ter 8 caracteres alfabéticos!</i>"
        aviso9.innerHTML = mensagem
        formulario.senha.focus()
        return false
    }

    if (senha1 == "") {
        mensagem = "<i class= bi-exclamation-circle> Preencha este campo</i>"
        aviso10.innerHTML = mensagem
        formulario.senha1.focus()
        return false
    } else {
        mensagem = ""
        aviso10.innerHTML = mensagem
    }
    if (senha != senha1) {
        mensagem = "<i class= bi-exclamation-circle> As senhas não estão iguais!</i>"
        aviso10.innerHTML = mensagem
        return false
    }

    //adicionando os dados do login e senha no LocalStorage
    if (nome && data && sexo && nome1 && CPF && tel && cep && login && senha && senha1) {
        let lista = JSON.parse(localStorage.getItem('lista') || '[]')

        lista.push(
            {
                loginCad: login,
                senhaCad: senha
            }
        )

        localStorage.setItem('lista', JSON.stringify(lista))
    }
}


// criando uma função para validar o CPF
function validaCPF(c) {

    if((c = c.replace(/[^\d]/g,"")).length != 11)
      return false
  
    if (c == "00000000000")
      return false;
    if (c == "11111111111")
      return false;
    if (c == "22222222222")
      return false;
    if (c == "33333333333")
      return false;
    if (c == "44444444444")
      return false;
    if (c == "55555555555")
      return false;
    if (c == "66666666666")
      return false;
    if (c == "77777777777")
      return false;
    if (c == "88888888888")
      return false;
    if (c == "99999999999")
      return false;
  
    var r;
    var s = 0;
  
    for (i=1; i<=9; i++)
      s = s + parseInt(c[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[9]))
      return false;
  
    s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(c[i-1]) * (12 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[10]))
      return false;
  
    return true;
  }
  
  
  function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
    function fMascEx() {
  obj.value=masc(obj.value)
  }
  
  function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
  
    cpfCheck = function (el) {
      document.getElementById('cpfResponse').innerHTML = validaCPF(el.value)? '<i class="bi bi-check-circle" style="color:green"><span> válido</span></i>' : '<i class= bi-exclamation-circle style="color:red"><span> inválido</span></i>';
      if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';

    }


    // criando uma função para validar tanto o celular quanto o telefone fixo
    function mascara(o,f){
        v_obj=o
        v_fun=f
        setTimeout("execmascara()",1)
    }
    function execmascara(){
        v_obj.value=v_fun(v_obj.value)
    }
    function mtel(v){
        v=v.replace(/\D/g,""); 
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
        v=v.replace(/(\d)(\d{4})$/,"$1-$2");
        return v;
    }
    function id( el ){
        return document.getElementById( el );
    }
    window.onload = function(){
        id('celular').onkeyup = function(){
            mascara( this, mtel );
        }
    }
   

// criando uma função para validar o CEP, de quando inserido, preenche os campos de endereço, bairro, cidade e estado
    function limpa_formulário_cep() {
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cid').value=("");
        document.getElementById('uf').value=("");
    }

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cid').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } 
    else {

        limpa_formulário_cep();
        mensagem = "<i class= bi-exclamation-circle> CEP não encontrado</i>"
        aviso7.innerHTML = mensagem
        return false
    }
}
    
function pesquisacep(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cid').value="...";
            document.getElementById('uf').value="...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        } 
        else {
            limpa_formulário_cep();
            mensagem = "<i class= bi-exclamation-circle> CEP inválido!</i>"
            aviso7.innerHTML = mensagem
            return false
        }
    } 
    else {
        limpa_formulário_cep();
    }
};