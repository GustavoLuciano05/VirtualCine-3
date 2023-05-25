function voltar(){
    window.location.href=("../telaInicial/novaTelaInicial.html");
}
var i = 0
function carrinho(){
     
     var carrinho = document.getElementById('carrinho');
     
  
    i++;
     
     if(i === 1) {
        carrinho.style.position = 'fixed';
        carrinho.style.width = '30%';
        carrinho.style.height = '50%';
        
     } else {
        carrinho.style.position = 'relative';
        carrinho.style.width = '70%';
        carrinho.style.height = '90%';
        carrinho.classList.add("carrinho");
        i = 0;
     }
  
}



function trocarCategoria(id,titulo){
   
   $('#container'+id).css({"z-index": "1"});
   $('#container'+id).animate({opacity: '100%'},500);
   
   for (let index = 0; index < 6; index++) {
      if(index != id){
         $('#container'+index).animate({opacity: '0%'},500);
         $('#container'+index).css({"z-index": "-1"});
      } 
   }
   document.getElementById("caixa2").innerText = titulo;
   
}