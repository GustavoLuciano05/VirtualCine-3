  function Login(){
            var usuario=document.getElementById('usuario').value;
            usuario=usuario.toLowerCase();
            var senha=document.getElementById('senha').value;
            senha=senha.toLowerCase();
            if (usuario=="kayque" && senha=="123456") {
                window.open('../telaInicial/novaTelaInicial.html?usuario='+usuario,'Virtual Cine');
               
            }
            else{
                alert("Dados incorretos, tente novamente");
            }
        }