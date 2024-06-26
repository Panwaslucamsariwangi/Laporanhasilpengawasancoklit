const scriptURL = 'https://script.google.com/macros/s/AKfycbwH9C-XSDEuTPlw-L82v2x1q7xnhp9DYSxbAkzOsitzkI9QYT9pRoyby6I2jfPF1hBe/exec'

const form = document.forms['coklit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
