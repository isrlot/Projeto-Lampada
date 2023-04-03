const lampada = document.getElementById('lampada')
const ligada = document.getElementById('on')
const apagada = document.getElementById('off')



ligada.addEventListener('click',on)

function on(){
    lampada.src ="imagens/acesa.gif"
    
}

apagada.addEventListener('click',off)

function off(){
    lampada.src = "imagens/apagada.gif"
   
}

addEventListener('dblclick',quebr)

function quebr(){
    lampada.src = "imagens/quebrada.jpg"

}


