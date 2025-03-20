function openMenu(){
    var abrir = document.getElementById ("menu-ul")
    var botao = document.getElementById("botao")
    abrir.classList.toggle ("show")
    if (abrir.classList.contains ("show")){
        abrir.classList.add("show")
        botao.classList.add("esconder")
    }else{
        abrir.classList.remove("show")
        botao.classList.remove("esconder")
       
    }
        
    
    
}