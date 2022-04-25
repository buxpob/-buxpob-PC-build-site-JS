const sendForm = () => {
  const form = document.querySelector('.modal');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error('Error!');
        }
        response.json()
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        form.reset();
        form.style.display = ''
      })
  })
}

sendForm();