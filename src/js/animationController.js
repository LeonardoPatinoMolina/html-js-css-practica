import {$, $$} from './utils.js'

const modalMainCard = $('#modal_main_card');
const items = $$('.second_nav__list__item');

export const openMainModal = ()=>{
  modalMainCard.classList.remove('close_an')
  modalMainCard.classList.add('open_an')
  items.forEach(e=>{
    e.classList.add('coldDown_an')
  })
}
export const closeMainModal = ()=>{
  modalMainCard.classList.remove('open_an')
  modalMainCard.classList.add('close_an')
  items.forEach(e=>{
    e.classList.remove('coldDown_an')
  })
}

//------------
const modalADCard = $('.acerca_de__modal_card');
export const openADModal = ()=>{
  modalADCard.classList.remove('bounce-a-out')
  modalADCard.classList.add('bounce-a-in')
}
export const closeADModal = ()=>{
  modalADCard.classList.remove('bounce-a-in')
  modalADCard.classList.add('bounce-a-out')
}

//--------------------------

const jsL = $('#js_logo');
const cssL = $('#css_logo');
const htmlL = $('#html_logo');
jsL.addEventListener('click',()=>{
  jsL.classList.add('shake-an')
  setTimeout(()=>{
    jsL.classList.remove('shake-an')
  },700)
})
cssL.addEventListener('click',()=>{
  cssL.classList.add('shake-an')
  setTimeout(()=>{
    cssL.classList.remove('shake-an')
  },700)
})
htmlL.addEventListener('click',()=>{
  htmlL.classList.add('shake-an')
  setTimeout(()=>{
    htmlL.classList.remove('shake-an')
  },700)
})

//--------------------------------

const footer = $('.footer');
const itemsFooter = $$('.footer__list__item')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      itemsFooter.forEach(item=>{
        item.classList.add('coldDown_an')
      })
    } else {
      itemsFooter.forEach(item=>{
        item.classList.remove('coldDown_an')
      })
    }
  });
});

// Observar el elemento
observer.observe(footer);



