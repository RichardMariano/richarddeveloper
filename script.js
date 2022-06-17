//EFEITO SCROLL DO MOUSE NA PAGINA.


const target = document.querySelectorAll('[data-anime]')

const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + 661; //(window.innerHeight * 0.75);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
        console.log(element.offsetTop) ;
    })
}

animeScroll()

window.addEventListener('scroll', function() {
    animeScroll();

})






// EFEITO DOS ELEMENTOS SUMIR E APARECER NA PAGINA.


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })
}

const titulo = document.querySelector('h1');
typeWriter(titulo);







// EFEITO SLIDE NA PAGINA.

var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .images1')
var atual = 0 
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')
var rolar = true

for(let i=0; i < quant.lenght; i++){
    var div = document.createElement('div')
    div.id = i 
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgatual')

var pos = document.querySelectorAll('.balls .div')

for(let i=0; i < pos.length; i++ ){
    pos[i].addEventListener('click', function(){
        atual = pos[i].id
        rolar = false
        slide()
    })
}

voltar.addEventListener('click', ()=>{
    atual--
    rolar = false
    slide()
})

next.addEventListener('click', ()=>{
    atual++
    rolar = false
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0 ){
        atual = quant.lenght-1
    }
    document.querySelector('.imgatual').classList.remove('imgatual')
    imagem.style.marginLeft = -850*atual+'px'
    document.getElementById(atual).classList.add('imgatual')
}
slide()
setInterval(()=>{
    if(rolar){
    atual++
    slide()
    }
    else{
        rolar=true
    }
},4000)