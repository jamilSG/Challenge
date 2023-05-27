var entrada = document.querySelector(".textarea")
var copiar = document.querySelector(".copiar")

var buttonEncriptar = document.querySelector(".encriptar");
var buttonDesencriptar = document.querySelector(".desencriptar");
var salida = document.querySelector(".salida")
var imagenEspera = document.querySelector(".imagenEspera");
var primerTexto = document.querySelector(".primerTexto");
var segundoTexto = document.querySelector(".segundoTexto");

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
copiar.onclick = copiarTexto;

function copiarTexto(){
  var copiado = salida.innerHTML;
  navigator.clipboard.writeText(salida.innerHTML)
  salida.value = "";
}



var clave = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

function limpiezaWhitePannel(){
    //reseteo
    imagenEspera.style.visibility = "hidden";
    primerTexto.style.visibility = "hidden";
    segundoTexto.style.visibility = "hidden";
   salida.style.visibility = "visible"

    copiar.style.visibility = "visible"
}

function crear(texto){
  var entrada = texto.split("")
  var resultado ="";
  for(i = 0; i<texto.length ; i++){
    j=0;
    while(j<5){
      if(entrada[i] == clave[j][0]){
        entrada[i] = clave[j][1];
      }
      j++;
    }
  }
  resultado = entrada.join("");
  return resultado
}

function decodificar(texto){
  
  var resultado =texto;
  var i=0;
  while(i<5){
    resultado = resultado.replaceAll(clave[i][1],clave[i][0]);
    i++;
  }
  return resultado
}

function encriptar(){
  /*alert("Hola")*/

  //reseteo entrada
  var texto = entrada.textContent;
  limpiezaWhitePannel();

  salida.innerHTML = crear(texto);
}

function desencriptar(){
  /*alert("Hola")*/

  //reseteo entrada
  var texto = entrada.textContent;
  limpiezaWhitePannel();

  salida.innerHTML = decodificar(texto);
}