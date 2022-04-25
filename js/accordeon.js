const accordeon = () => {
  const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem, index) => {
  const title = elem.querySelector('.program-line__title');
  const description = elem.querySelector('.program-line__descr');

  title.addEventListener('click', () => {
    const currentIndex = index;
    contents.forEach((elem, index) => index !== currentIndex && elem.querySelector('.program-line__descr').classList.remove('active'));       
    description.classList.toggle('active');    
  });
});
}

accordeon();