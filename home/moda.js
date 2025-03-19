function openMenu(){
    var abrir = document.getElementById ("menu-nav")
    abrir.classList.toggle ("show")
    if (abrir.classList.contains ("show")){
        abrir.classList.add("show")
    }else{
        abrir.classList.remove("show")
    }
        
    
    
}