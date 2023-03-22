const form = document.querySelector("form");
// const fname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const named = document.querySelector('input[name="name"]');
const errorMessage = document.getElementById("errorMessage");
const errorName = document.getElementById("errorName");
const emailError = document.getElementById("emailError");
const errorSubject = document.getElementById("errorSubject");

const messageError = document.getElementById("messageError");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(named.value === ''){
        errorName.innerText = "name can not be ampty";
        named.focus();
        return;
    } else{
        errorName.innerText = "";

    }
  if(email.value === ''){
        emailError.innerText = "email can not be ampty";
            named.focus();
            return;
        } else{
            emailError.innerText = "";
    
        }
        // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.Value)) {
        //     emailError.innerText = 'Please enter a valid email address.';
        //     emailInput.focus();
        //     return;
        // } else {
        //     emailError.innerText = '';
        
        // }
   
      if(subject.value === ''){
        errorSubject.innerText = "please enter the subject ";
            named.focus();
            return;
        } else{
            errorSubject.innerText = "";
        
    }
    if(message.value === ''){
        errorMessage.innerText = "please enter your message";
        named.focus();
        return;
    } else{
        errorMessage.innerText = "";

    }
    if(named.value !== '' && email.value !== '' && subject.value !== '' && message.value !== ''){
        form.submit();
    }
})