// DOM

/* querySelector | querySelectorAll
// let links = document.querySelectorAll("a");

inks.forEach(function(link) {
    console.log(link);
});*/

/*let celdas = document.querySelectorAll("td");
celdas.forEach(function (td) {
    td.addEventListener('click',function () {
        console.log(this)
    })
    
})*/

/* Eliminar el evento por default de algo */
let links = document.querySelectorAll('.close');
links.forEach(function(link){
    link.addEventListener('click',function(evento){
        evento.preventDefault();

        let content = document.querySelector('.content');

        // Quitarle las clases de animacion
        content.classList.remove('animate__animated animate__fadeInDown')

        // Agregarle clases de animacion
        content.classList.add('animate__animated animate__fadeOutUp')

        // Retrasar el redireccionamiento
        setTimeout(function(){
          location.href = '/proyecto1';  
        },600); // una sola vez

        // setInterval -> constantemente
        
        return false;
    });
}); 

/* Eliminar o agregar elementos
let iconos = document.querySelectorAll('i');
iconos.forEach(function(icono){
    icono.classList.remove('fa-plane-departure');
    icono.classList.add('fa-plane-departure');
}); */

