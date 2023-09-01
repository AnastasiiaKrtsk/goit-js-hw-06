const form = document.querySelector('.login-form');

form.addEventListener('submit', function (el) {
  el.preventDefault();

  const formData = new FormData(el.currentTarget);
  const userData = {};

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  if (!userData.email || !userData.password) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  console.log(userData);
  el.currentTarget.reset();
});
