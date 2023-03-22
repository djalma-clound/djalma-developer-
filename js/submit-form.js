const form = document.querySelector('form');
const message = document.querySelector('#message');
const status = document.createElement('p');
form.appendChild(status);

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit.php');

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      message.value = '';
      status.textContent = 'Thank you for your message!';
    } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
      status.textContent = 'There was an error sending your message. Please try again later.';
    }
  };

  xhr.send(formData);
});

