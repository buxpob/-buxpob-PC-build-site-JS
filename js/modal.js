const modalButtonApplication = document.querySelector('.modal__button');
const modalButtonCourse = document.querySelector('.course__button');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');

const createButtonModalClose = () => {
  const buttonClose = document.createElement('div');
  buttonClose.classList.add('button__close');
  buttonClose.innerHTML = 'x';
  modalInner.prepend(buttonClose);
  modalInner.style.position = 'relative';
  buttonClose.style.cssText = `
    font-size:20px; 
    position:absolute; 
    display:inline; 
    padding:10px; 
    top:3px; 
    right:10px; 
    cursor:pointer;
`;
}

createButtonModalClose();

const escKeydown = (evt, el) => {
  evt.preventDefault(); 
  if (evt.key  === 'Esc' || evt.key  === 'Escape') {
    el.style.display = '';
  }
  document.removeEventListener('keydown', (evt) => {
  escKeydown(evt, el);
  }); 
}

const clickButtonCloseModal = (el) => {
  const buttonClose = el.querySelector('.button__close');
  buttonClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    el.style.display = '';
    document.removeEventListener('keydown', (evt) => {
    escKeydown(evt, el);
  }); 
  }); 
}

const escKeydownCloseModal = () => {
  document.addEventListener('keydown', (evt) => escKeydown(evt, modal)); 
}

modalButtonApplication.addEventListener('click', () => {
  modal.style.display = 'flex';
  clickButtonCloseModal(modal);
  escKeydownCloseModal();
});   

modalButtonCourse.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.querySelector('.modal__header').innerHTML = 'Заявка на заказ курса';
  clickButtonCloseModal(modal);
  escKeydownCloseModal();
});

modal.addEventListener('click', (evt) => {
  const modelContent = evt.target.closest('.modal__inner');
  if (!modelContent) {
    modal.style.display = '';
  }
})


