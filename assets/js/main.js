/*====================== MENU MOSTRAR E OCULTO ======================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*====================== MENU MOSTRAR ======================*/
/*Validação if com a constante*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*====================== MENU OCULTO ======================*/
/*Validação if*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}