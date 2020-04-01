let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let password = document.getElementById("password");
let confirmPassowrd = document.getElementById("confirmPassowrd");
let form = document.querySelector("form");
$(document).ready(function() {
  $('select').material_select();
});

$('.datepicker').pickadate({
  selectMonths: true, 
  selectYears: 15, 
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false ,
  container: undefined, 
});
$('.timepicker').pickatime({
  default: 'now', 
  fromnow: 0,       
  twelvehour: false, 
  donetext: 'OK', 
  cleartext: 'Clear', 
  canceltext: 'Cancel', 
  container: undefined,
  autoclose: false, 
  ampmclickable: true, 
  aftershow: function(){} 
});
let isValid = {
  firstNameIsValid: false,
  lastNameIsValid: false,
  emailIsValid: false,
  passwordIsValid: false,
  confirmPassowrdIsvalid: false,
  phoneIsValid:false
}