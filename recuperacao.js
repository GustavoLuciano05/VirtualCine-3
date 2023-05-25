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
    }
}

function exibirBandeiras(){
    var lista = document.getElementById("lista-bandeiras");
    if (lista.style.display === "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  }    

//   function trocarBandeiras(){
//     var lista = document.getElementById("trocaBandeira");
//     var imagem = document.getElementById('2-argentina')
//     if (lista.style.display === "none") {
//         lista.style.display = "block";
//       } else {
//         lista.value = imagem
//       }
//   }

//   function trocarBandeiras() {
//     var lista = document.getElementById("trocaBandeira");
//     var imagem = document.getElementById('2-argentina');
    
//     if (lista.style.display === "none") {
//       lista.style.display = "block";
//     } else {
//       lista.value = imagem.src("recuperação_senha/img/argentina.png");
//     }
//   }
 
// const caixaBandeira = document.querySelector('.caixadabandeira');
// const paises = document.querySelectorAll('.paises .pais');

// paises.forEach(pais => {
//   const imgPais = pais.querySelector('img');

//   pais.addEventListener('click', function() {
//     const imgSrc = imgPais.src; 

//     caixaBandeira.querySelector('.bandeira').src = imgSrc;
//   });
// });

function trocarBandeiras(src, id, n) {
    var imagem = document.getElementById('trocaBandeira');
    var imagemPais = document.getElementById(id);
    imagem.src = src;
    dddPais.value = n
  }






