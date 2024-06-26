const scriptURL = 'https://script.google.com/macros/s/AKfycbyNp041cSIDRpbSuYQ6iNiMF2h_zvvebsVkrom-PfX8QjMkAzTA6IqfSmXU5orjG-VXpQ/exec'

const form = document.forms['coklit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})