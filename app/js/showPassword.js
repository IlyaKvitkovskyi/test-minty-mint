function showPassword() {
  const btn = document.querySelector('.input-btn');
  const input = document.querySelector('.form__input-password');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
}

showPassword();
