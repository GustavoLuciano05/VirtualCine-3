var usuario = document.getElementById("usuario");
var i=0;
function mudarBorda(){
    i++;
    if(i==1) {
        usuario.style.border = 'solid 5px #E5383B'

    } else {
        usuario.style.border = 'solid 2px rgba(0, 0, 0, .5)'
        i=0;
    }
}