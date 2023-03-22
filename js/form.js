const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent form from submitting and refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // perform input validation, e.g. check if required fields are not empty, email is valid format, etc.
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // handle server response, e.g. show success or error message
    })
    .catch(error => {
        console.error(error);
    });
});
const formData = new FormData(form);
const xhr = new XMLHttpRequest();
xhr.open('POST', 'validation.php');

xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        message.value = '';
        status.textContent = 'Thank you for your message!';
    } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
        status.textContent = 'There was an error sending your message. Please try again later.';
    }
};

xhr.send(formData);
