//Boton seguir
const button = document.querySelector('button');
let isFollowing = false;

button.addEventListener('click', function () {
    isFollowing = !isFollowing;

    if (isFollowing) {
        button.textContent = 'Dejar de seguir';
        button.classList.remove('follow');
        button.classList.add('btn-unfollow');
    } else {
        button.textContent = 'Seguir';
        button.classList.remove('btn-unfollow');
        button.classList.add('btn-follow');
    }
});

//Comentar

function agregarComentario() {
    var usuario = document.getElementById("usuario").value;
    var comentario = document.getElementById("comentario").value;
    var comentarios = document.getElementById("comentarios");

    var errorUsuario = document.getElementById("error-usuario");
    var comentarioVacio = document.getElementById("comentario-vacio");

    if (usuario.trim() === "") {
        errorUsuario.style.display = "block";
        return;
    } else {
        errorUsuario.style.display = "none";
    }


    if (comentario.trim() === "") {
        comentarioVacio.style.display = "block";
        return;
    } else {
        comentarioVacio.style.display = "none";
    }


    var nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");
    nuevoComentario.innerHTML =  "<p><b>" + usuario + "</b> " + comentario + "<button class='btn-borrar'>Eliminar</button></p>";

    comentarios.appendChild(nuevoComentario);

    document.getElementById("comentario").value = "";

    var botonesBorrar = document.getElementsByClassName("btn-borrar");
    for (var i = 0; i < botonesBorrar.length; i++) {
        botonesBorrar[i].addEventListener("click", function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}


//Me gusta
var liked = false; 
var likesCounter = document.getElementById("likes-counter"); 
var btnLike = document.getElementById("btn-like"); 

btnLike.addEventListener("click", function() {
    if (!liked) { 
        var likes = parseInt(likesCounter.innerText); 
        likes++; 
        likesCounter.innerText = likes; 
        liked = true; 
    }
});


