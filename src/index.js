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
  event.target.reset()
}

function addToList(description) {
  let li = document.createElement('li')
  li.innerText = description + " ";
  li.dataset.description = description.split(" ").join("");
  let removeLi = document.createElement('button')
  removeLi.innerText = "X"
  removeLi.dataset.description = description.split(" ").join("");
  removeLi.addEventListener("click", deleteLi)
  li.appendChild(removeLi)
  let ulEl = document.querySelector('#tasks')
  ulEl.appendChild(li)
}

function deleteLi(event){
  // get element by description
  y = event.currentTarget.dataset.description
  x = document.querySelectorAll(`[data-description ~= ${y}]`)
  x[0].remove();
  // console.log(x);

  // destroy element
  // x.remove();
  // celebrate
  // don't reload page

}
