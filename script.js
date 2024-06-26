const scriptURL = 'https://script.google.com/macros/s/AKfycbxdgTnuDqa9RkpI4gvg7F_2B4Ehp0Iq9LxHVjGzmBb-yevV8bw-7TlJ0W_Vdz95oAcY/exec'

const form = document.forms['coklit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
