const dino = document.querySelector('.dino');
let  isJump = false; //inicial sem pular
const background = document.querySelector('.background');
let position = 0;
function pressionar(event){ //'event' enviado para a função toda veez que uma tecla é pressionada no navegador
    if(event.keyCode == 32){// keykode.info
        if(! isJump){  
            jump();
        }       
    }
}
function jump(){
    isJump = true;

    let upInterval = setInterval(() => {//set o intervalo de tempo

        if(position >= 150){
            clearInterval(upInterval);

            //descida
            let downInterval = setInterval (() => {
            if(position <=0 ) {
            clearInterval(downInterval);
            isJump = false; //parou de pular
            } else {
            position -= 20;
            dino.style.bottom = position + 'px';
            }
        },20 );

        }else{
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';

        }         
    }, 20);// 20 milisegundos, criando uma repetição
} 

function createCactus(){

    const cactus = document.createElement('div');
    let cactosPosition = 1000;//posição 1000 px a direita do left
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus');//adiciona a conts uma classe.
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); //adiciona um 'filho' cactos ao background.

    let leftInterval = setInterval (() => {
        if(cactosPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactosPosition > 0 && cactosPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            cactosPosition -= 10;
            cactus.style.left = cactosPosition + 'px';
        }
    }, 20 );

    setTimeout(createCactus, randomTime)//executa uma função depois de determinado tempo
}

createCactus();
document.addEventListener('keyup', pressionar );

    
