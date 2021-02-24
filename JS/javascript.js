document.getElementById('contact-form').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#mail').value;
  let message = document.querySelector('#message').value;
  
