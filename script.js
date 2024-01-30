const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const proximoCapitulo = document.getElementById("proximo")
const numeroCapitulos = 10;

let tocando = false;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
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

function proximaFaixa(){
    capituloAtual = capituloAtual + 1;
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1;
    }
    audioCapitulo.src = './src/books/dom-casmurro/' + capituloAtual + '.mp3';
}

function faixaAnterior(){
    capituloAtual = capituloAtual - 1;

}

botaoPlayPause.addEventListener('click', tocarOuPausar)

proximoCapitulo.addEventListener('click', proximaFaixa)




