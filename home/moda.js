function openMenu(){
    var abrir = document.getElementById ("menu-ul")
    var botao = document.getElementById("botao")
    var icone = document.getElementById("icone")
    abrir.classList.toggle ("show")
    if (abrir.classList.contains ("show")){
        abrir.classList.add("show")
        botao.classList.add("esconder")
        icone.src = ("imagens/menu-fechado (1).png.png")
    }else{
        abrir.classList.remove("show")
        botao.classList.remove("esconder")
        icone.src = ("imagens/menu-aberto (1).png")
       
    }
        
    
    
}