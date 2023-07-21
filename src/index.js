import './index.css';
const tasks = [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: true, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
    // Add more tasks here if needed
  ];
  
  function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear the existing content
  
    tasks
      .sort((a, b) => a.index - b.index) // Sort tasks based on the index
      .forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.description;
        listItem.classList.add(task.completed ? 'completed' : 'pending');
        todoList.appendChild(listItem);
      });
  }
  
  document.addEventListener('DOMContentLoaded', renderTasks);
  
