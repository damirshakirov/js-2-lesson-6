var Form = function () {
  this.phonePattern = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/,
    this.namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/,
    this.emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    this.textPattern = /^.*$/,
    this.textErrors = '',
    this.setEvents();
};

//Отслеживание взаимодействие пользоватя с элементами формы
Form.prototype.setEvents = function () {
  $('input').on('keyup', this.inputCheck.bind(this));
  $('#submitForm').on('click', this.submitForm.bind(this));
};

//Регулярные проверки полей формы в реальном времени 
Form.prototype.inputCheck = function (event) {
  var id = $(event.currentTarget).attr('id');
  var value = $('#' + id).val();

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

//Проверка полей после нажатия кнопки 'Отправить'
Form.prototype.submitForm = function (event) {
  this.textErrors = '';
  if (this.emailPattern.test($('#email').val()) == false) {
    this.effectError('#email');
    this.textErrors += '<p>Укажите корректный email</p>';
  };
  if (this.namePattern.test($('#name').val()) == false) {
    this.effectError('#name');
    this.textErrors += '<p>Имя должно содержать только буквы</p>';
  };
  if (this.phonePattern.test($('#phone').val()) == false) {
    this.effectError('#phone');
    this.textErrors += '<p>Телефон должен быть в формате +7(000)000-0000</p>';
  };

  if (this.textPattern.test($('#text').val()) == false) this.effectError('#text');
  if (this.textErrors == '') this.textErrors = 'Данные отправлены. Спасибо';
  $('#dialog').html(this.textErrors);
  $('#dialog').dialog({

    draggable: false,
    modal: true,
    resizable: false
  });
}

//Эффект с полем с ошибкой
Form.prototype.effectError = function (id) {
  $(id).css('borderColor', 'red')
  $(id).effect('bounce');
};


$(document).ready(function () {
  form = new Form();
  $("#datepicker").datepicker();
  $("#anim").on("change", function () {
    $("#datepicker").datepicker("option", "showAnim", $(this).val());
  });
});
