function MostrarCheckbox(id) {
    if (id == "MensagemSMS") {
        telefone.style.display = "block";
        usuario.style.display = "none";


    }
    if (id == "Emailcaixa") {
        telefone.style.display = "none";
        usuario.style.display = "block";

    }

    if (id == "MensagemSMS") {
        caixabranca.style.display = "none";
        telefone.style.display = "block";

    }

    if (id == "Emailcaixa") {
        caixabranca.style.display = "none";
        usuario.style.display = "block";
        listaBandeiras.style.display = "none";

    }
}

function exibirBandeiras(){
    var lista = document.getElementById("listaBandeiras");
    if (lista.style.display === "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  }    

function trocarBandeiras(src, id, n) {
    var imagem = document.getElementById('trocaBandeira');
    var imagemPais = document.getElementById(id);
    imagem.src = src;
    dddPais.value = n
  }

  function validarTelefone() {
    var telefoneInput = document.getElementById("dddPais");
    var telefone = telefoneInput.value;
    var telefoneRegex = /\(\+[0-9]{2,3}\)\ \([0-9]{2}\) [0-9]{4}-[0-9]{4}/;
    var telefoneRegex = /\(\+[0-9]{2,3}\)[0-9]{11}/;
    var telefoneRegex = /\(\+[0-9]{2,3}\) [0-9]{11}/;
  
    if (telefoneRegex.test(telefone)) {
      alert("Número de telefone válido!");
      setTimeout(function() {
        window.location.href = "../inserir_cód_sms/inserir_cód_sms.html";
      }, 0);
    } else {
      alert("Número de telefone inválido!");
    }
    
  }

  const form = document.querySelector("#form")
  const emailInput = document.querySelector("#usuario")
  const telefoneInput = document.querySelector("#dddPais")

  console.log(form, emailInput, telefoneInput)

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio 
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
      alert("Por favor preencha o seu email");
      return;
    }
    form.submit();
  });

  // Funcão que valida e-mail
  function isEmailValid(email) {
    const emailRegex = new RegExp(
      // usuario12@gmail.com.br
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.teste(email)) {
      return true
    }
    return false;

  }
  