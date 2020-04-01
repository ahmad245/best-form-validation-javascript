const NameValid = (object, event) => {
  const {
    small,
    value
  } = init(event);
  if (isEmpty(value)) {
    createMessage(small, object.message);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  } else {
    small.innerText = "";
    removeStyleElements(event.target);
    isValid[object.isvalid] = true;
    return true;
  }
}



const emailValid = (object, event) => {
  const {
    small,
    value
  } = init(event);
  if (isEmpty(value)) {
    createMessage(small, object.message);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  } else if (object.messageEmaile) {
    if (!isValidEmail(event.target.value)) {
      createMessage(small, object.messageEmaile);
      addStyleElement(small, event.target);
      isValid[object.isvalid] = false;
      return false;
    } else {
      small.innerText = "";
      removeStyleElements(event.target);
      isValid[object.isvalid] = true;
      return true;
    }
  } else {
    small.innerText = "";
    removeStyleElements(event.target);
    isValid[object.isvalid] = true;
    return true;
  }
}
const passwordValid = (object, event) => {
  const {
    small,
    value
  } = init(event);
  if (isEmpty(value)) {
    createMessage(small, object.message);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  } else if (!chechLength(value, 6, 20)) {
    createMessage(small, object.minMessage);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  } else if (!CheckPassword(value)) {
    
    createMessage(small, object.passMessage);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  } else {
    small.innerText = "";
    removeStyleElements(event.target);
    isValid[object.isvalid] = true;
    return true;
  }
}
const confirmPassowrdValid = (object, event) => {
  const {
    small,
    value
  } = init(event);
  if (isEmpty(value)) {
    createMessage(small, object.message);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  }else if(!chechPasswordMatch(value,password.value)){
    createMessage(small, object.matchMessage);
    addStyleElement(small, event.target);
    isValid[object.isvalid] = false;
    return false;
  } 
  else {
    small.innerText = "";
    removeStyleElements(event.target);
    isValid[object.isvalid] = true;
    return true;
  }
}

//////////////////////// input event
firstName.addEventListener(
  "input",
  NameValid.bind(null, {
    message: "this first name is required",
    isvalid: 'firstNameIsValid',
    min: 1,
    max: 20
  })
);
lastName.addEventListener(
  "input",
  NameValid.bind(null, {
    message: "this last  name is required",
    isvalid: 'lastNameIsValid',
    min: 1,
    max: 20
  })
);

email.addEventListener(
  "input",
  emailValid.bind(null, {
    message: "this email is required",
    messageEmaile: "this is not valid email",
    isvalid: 'emailIsValid'
  })
);
password.addEventListener(
  "input",
  passwordValid.bind(null, {
    message: "this password is required",
    isvalid: 'passwordIsValid',
    min: 6,
    max: 20,
    minMessage: 'must have at least 1',
    maxMessage: 'must have at most 20 ',
    passMessage: 'Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]'
  })
);
confirmPassowrd.addEventListener(
  "input",
  confirmPassowrdValid.bind(null, {
    message: "this confirmPassowrd is required",
    isvalid: 'confirmPassowrdIsvalid',
    matchMessage:'must be match password'
  })
);

/////////////////////focusout EVENT
firstName.addEventListener(
  "focusout",
  NameValid.bind(null, {
    message: "this first name is required",
    isvalid: 'firstNameIsValid'
  })
);
lastName.addEventListener(
  "focusout",
  NameValid.bind(null, {
    message: "this last  name is required",
    isvalid: 'lastNameIsValid'
  })
);
email.addEventListener(
  "focusout",
  emailValid.bind(null, {
    message: "this email is required",
    messageEmaile: "this is not valid email",
    isvalid: 'emailIsValid'
  })
);
password.addEventListener(
  "focusout",
  passwordValid.bind(null, {
    message: "this password is required",
    isvalid: 'passwordIsValid',
    min: 6,
    max: 20,
    minMessage: 'must have at least 1',
    maxMessage: 'must have at most 20 ',
    passMessage: 'Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]'
  })
);
confirmPassowrd.addEventListener(
  "focusout",
  confirmPassowrdValid.bind(null, {
    message: "this confirmPassowrd is required",
    isvalid: 'confirmPassowrdIsvalid'
  })
);

triggerForm();


///////////////////From SUBMIT
form.addEventListener('submit', (event) => {
  event.preventDefault();

})
isValidForm();