const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const numeroCapitulos = 10;

let tocando = false;

function tocarFaixa(){
    audioCapitulo.play();

}
function pausarFaixa(){
    audioCapitulo.pause();
}

function tocarOuPausar(){
    if(tocando == false){
        tocando = true;
        tocarFaixa();
    }else{
        tocando = false;
        pausarFaixa();
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar)




