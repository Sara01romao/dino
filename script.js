let dino = document.querySelector("#dino");
let cacto = document.querySelector("#cacto");




window.addEventListener('keydown', function(e) {
    if (e.keyCode == 32) {
        if(dino.classList != 'animar'){
            dino.classList.add('animar');
        }
    
        setTimeout(function(){
            dino.classList.remove('animar')
        }, 500)   
    }
});

function perdeu(){
    document.querySelector('.modal').style.visibility="visible"
    console.log("sara")
   
}

function comecar(){
    location.reload()
}

var testarColisao = setInterval(function(){
    var topoDino = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    )

    var EsquerdaCacto = parseInt(
        window.getComputedStyle(cacto).getPropertyValue('left')
    )

    if(EsquerdaCacto < 20 && EsquerdaCacto > 0 && topoDino >= 130){
        cacto.style.animation = 'none'
        cacto.style.display = 'none'
        perdeu()
        
    }
    
}, 10)





