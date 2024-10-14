const form = document.getElementById('todo_form');
const input = document.getElementById('todo_input');
const todoContainer = document.getElementById('todo_container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
  }
});

function addTask(text) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('todo-item');

  // Create text span
  const taskText = document.createElement('span');
  taskText.classList.add('text');
  taskText.textContent = text;
  taskDiv.appendChild(taskText);

  // Create complete button
  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    taskDiv.classList.toggle('completed');
  });
  taskDiv.appendChild(completeBtn);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskDiv.remove();
  });
  taskDiv.appendChild(deleteBtn);

  // Append to container and animate
  todoContainer.appendChild(taskDiv);
  setTimeout(() => {
    taskDiv.classList.add('visible');
  }, 100);
}
