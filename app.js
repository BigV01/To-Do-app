const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <button class="delete" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

//function to delete a task
function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

//function to update a task
function updateTask(button) {
  const li = button.parentElement;
  const taskText = li.firstChild.textContent;
  const taskInput = document.getElementById("taskInput");
  taskInput.value = taskText;
  taskList.removeChild(li);
}

