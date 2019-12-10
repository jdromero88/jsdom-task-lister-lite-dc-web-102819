document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('do something MF');
  const formEl = document.getElementById('create-task-form')
  formEl.addEventListener('submit', submitForm) 
});


function submitForm(event) {
  event.preventDefault()
  let description = document.getElementById('new-task-description').value
  addToList(description)
}

function addToList(description) {
  let li = document.createElement('li')
  li.innerText = description
  let ulEl = document.querySelector('#tasks')
  ulEl.appendChild(li)
}
