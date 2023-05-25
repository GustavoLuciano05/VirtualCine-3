topico = "senai/nome";  // Variável que ficará no servidor MQTT
const cResposta = document.getElementById("containerResposta");
let i = 0;

// Conexão:
client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "");

// Funções executadas quando a conexão é perdida e quando uma mensagem chega:
client.onConnectionLost = ConexaoPerdida;
client.onMessageArrived = MensagemRecebida;

// Função chamada quando a conexão for realizada:
client.connect({onSuccess:Conectar});

// A função Conectar deve criar a variável (tópico) no computador remoto:
function Conectar() {
  
  client.subscribe(topico);  // Tópico (variável) criado no servidor MQTT
  
}

function ConexaoPerdida(responseObject) {
  if (responseObject.errorCode !== 0) {
    resposta.innerHTML += "Desconectado";
  }
}


// Função executada quando a variável (tópico) no servidor receber uma mensagem:
function MensagemRecebida(message) {
    
      var div = document.getElementById("resposta");
     
      
      var divClone = div.cloneNode(true);
      cResposta.appendChild(divClone);
      divClone.innerHTML = message.payloadString; 
   

}

function Enviar()
{
  texto = mensagem.value;
  let count = cResposta.childElementCount;
  console.log(count);
  message = new Paho.MQTT.Message(texto);
  message.destinationName = topico;
  
  if(texto != "" && count < 5 ){
    client.send(message);
  } else {
    
    client.send(message);
    
    cResposta.removeChild(cResposta.children[i]);
    
       
    i++;
   
  }
  
  
}