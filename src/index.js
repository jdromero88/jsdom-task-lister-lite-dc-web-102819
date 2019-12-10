document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('do something MF');
  const formEl = document.getElementById('create-task-form')
  formEl.addEventListener('submit', submitForm)
});


function submitForm(event) {
  event.preventDefault()
  let description = document.getElementById('new-task-description').value

  if (anythingThere(description)) {
      addToList(description)
} else {
      alert('Uh... I think you forgot to add a task. Please try again.');
}
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
  let editLi = document.createElement('button')
  editLi.innerText = "Edit";
  editLi.dataset.description = description.split(" ").join("");
  editLi.addEventListener("click", editItem)
  li.appendChild(removeLi)
  li.appendChild(editLi)
  let ulEl = document.querySelector('#tasks')
  ulEl.appendChild(li)
}

function deleteLi(event){
  // get element by description
  let y = event.currentTarget.dataset.description
  let x = document.querySelectorAll(`[data-description ~= ${y}]`)
  x[0].remove();
  // console.log(x);
}

function editItem(event){
  let y = event.currentTarget.dataset.description;
  let x = document.querySelectorAll(`[data-description ~= ${y}]`);
  let prevText = x[0].innerText.slice(0, -6);

  let editForm = document.createElement('form');

  let editField = document.createElement('input');
  editField.type = "text";
  editField.value = prevText;
  editField.id = "edit"
  editForm.appendChild(editField);

  let editSubmit = document.createElement('button');
  editSubmit.innerText = "Submit"
  editForm.appendChild(editSubmit);

  editForm.addEventListener('submit', submitNewText);

  x[0].parentNode.replaceChild(editForm, x[0]);
}

function submitNewText(event) {
  event.preventDefault();
  let form = event.currentTarget
  let description = document.getElementById('edit').value;

  if (anythingThere(description)) {
      addToList(description)
      form.remove();
} else {
      alert('Uh... I think you forgot to add a task. Please try again.');
}

  event.target.reset()
}

function anythingThere(string) {
  if (string === "") {
    return false
  } else {
    return true
  }
}
