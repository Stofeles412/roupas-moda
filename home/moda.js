function openMenu(){
    var abrir = document.getElementById ("menu-nav")
    abrir.classList.toggle ("show")
    if (abrir.classList.contains ("show")){
        abrir.classList.remove("show")
    }else{
        abrir.classList.add("show")
    }
        
    
    
}