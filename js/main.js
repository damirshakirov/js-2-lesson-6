// Задание №1
check = function (form) {
  let name = form.name.value,
    phone = form.phone.value,
    email = form.email.value,
    text = form.text.value,
    namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/,
    phonePattern = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/,
    emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textPattern = /^.*$/,
    errorText = '';
  if (namePattern.test(name)) document.getElementById('name').style.border = '1px solid green';
  else {
    document.getElementById('name').style.border = '1px solid red';
    errorText += 'Имя должно содержать только буквы\n';
  }
  if (phonePattern.test(phone)) document.getElementById('phone').style.border = '1px solid green';
  else {
    document.getElementById('phone').style.border = '1px solid red';
    errorText += 'Телефон должен быть в формате +7(000)000-0000\n';
  }
  if (emailPattern.test(email)) document.getElementById('email').style.border = '1px solid green';
  else {
    document.getElementById('email').style.border = '1px solid red';
    errorText += 'Укажите корректный email\n';
  }
  if (textPattern.test(text)) document.getElementById('text').style.border = '1px solid green';
  else {
    document.getElementById('text').style.border = '1px solid red';
    errorText += 'Заполните поле текст произвольным текстом';
  }
  if (errorText != '') alert(errorText);
  else alert('Данные отправлены. Спасибо!');
}

var Form = function () {
  this.phonePattern = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/,
    this.namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/,
    this.emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    this.textPattern = /^.*$/,
    this.setEvents();
};

//Отслеживание клавиатурного ввода в полях формы
Form.prototype.setEvents = function () {
  $('input').on('keyup', this.inputCheck.bind(this));
};

//Регулярные проверки полей формы в реальном времени 
Form.prototype.inputCheck = function (event) {
  var id = $(event.currentTarget).attr('id');
  var value = $('#' + id).val();
  console.log(id, value);
  switch (id) {
    case 'email':
      if (this.emailPattern.test(value)) $('#' + id).css('borderColor', 'green');
      else $('#' + id).css('borderColor', 'red');
      break;
    case 'name':
      if (this.namePattern.test(value)) $('#' + id).css('borderColor', 'green');
      else $('#' + id).css('borderColor', 'red');
      break;
    case 'phone':
      if (this.phonePattern.test(value)) $('#' + id).css('borderColor', 'green');
      else $('#' + id).css('borderColor', 'red');
      break;
    case 'text':
      if (this.textPattern.test(value)) $('#' + id).css('borderColor', 'green');
      else $('#' + id).css('borderColor', 'red');
      break;

  }
};



$(document).ready(function () {
  form = new Form();
});
