//Funcion que aplica la animacion de las habuilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("nodejs");
        habilidades[1].classList.add("react");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("bootstrap");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("powerbi");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoenequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("didactismo");
        habilidades[12].classList.add("pensamientoanalitico");
        habilidades[13].classList.add("manejoconflictos");
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}