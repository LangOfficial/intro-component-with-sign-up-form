const emailInputs = Array.from(document.querySelectorAll('.input-email'));
const freeTrialBtn = document.getElementById('free-trial-btn'); 

function isEmail(emailAdress){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

  else {
    return false; 
  }
}

function validateEmailInput() {
  emailInputs.forEach(emailInput => {
    const emailInputType = emailInput.placeholder.split(' ')[0].toLowerCase();
    const error = document.getElementById(`error-${emailInputType}`);
    const warning = document.getElementById(`warning-${emailInputType}`);

    if ((!emailInput.value && emailInputType !== 'email') || (emailInputType === 'email' && !isEmail(emailInput.value))) {
      emailInput.classList.add('border-primary-red', 'border-opacity-90');
      error.classList.remove('hidden');
      warning.classList.remove('hidden');
    } 
    else {
      emailInput.classList.remove('border-primary-red', 'border-opacity-90');
      error.classList.add('hidden');
      warning.classList.add('hidden');
    }
  })
}

freeTrialBtn.addEventListener('click', validateEmailInput);
document.body.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    validateEmailInput();
  }
})