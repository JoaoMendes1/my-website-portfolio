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

/*====================== MENU OCULTO =======================*/
/*Validação if*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*====================== HABILIDADES ABERTO/FECHADO ======================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

      function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open' 
        }
      }

      skillsHeader.forEach((el) =>{
        el.addEventListener('click', toggleSkills)
      })

      /*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
tab.addEventListener('click', () =>{
  const target = document.querySelector(tab.dataset.target)

  tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
  })
  target.classList.add('qualification__active')

  tabs.forEach(tab =>{
      tab.classList.remove('qualification__active')
  })
  tab.classList.add('qualification__active')
})
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 

      