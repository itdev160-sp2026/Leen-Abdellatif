let todoState = {
  tasks: [],
  nextId: 1,
  currentFilter: "all"
};

function addTask() {
  let text = document.getElementById("taskInput").value;
  let priority = document.getElementById("prioritySelect").value;

  if (text.trim() === "") {
    alert("empty!");
    return;
  }

  let task = {
    id: todoState.nextId++,
    text: text,
    completed: false,
    priority: priority
  };

  todoState.tasks.push(task);

  renderTasks();
}

function deleteTask(id) {
  if (!confirm("Delete?")) return;

  todoState.tasks = todoState.tasks.filter(t => t.id !== id);
  renderTasks();
}

function toggleTask(id) {
  let task = todoState.tasks.find(t => t.id === id);
  task.completed = !task.completed;
  renderTasks();
}

function renderTasks() {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  let tasks = todoState.tasks;

  if (todoState.currentFilter === "pending") {
    tasks = tasks.filter(t => !t.completed);
  }

  if (todoState.currentFilter === "completed") {
    tasks = tasks.filter(t => t.completed);
  }

  tasks.forEach(task => {
    let li = document.createElement("li");
    li.className = "task-item " + (task.completed ? "completed" : "");

    li.innerHTML = `
      ${task.text}
      <div>
        <button onclick="toggleTask(${task.id})">Done</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });

  document.getElementById("emptyState").style.display =
    tasks.length === 0 ? "block" : "none";

  updateStats();
}

function updateStats() {
  let total = todoState.tasks.length;
  let done = todoState.tasks.filter(t => t.completed).length;

  document.getElementById("taskStats").innerText =
    `Total: ${total} | Completed: ${done}`;
}

// filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    todoState.currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// buttons
document.getElementById("addTaskBtn").addEventListener("click", addTask);

document.getElementById("markAllDoneBtn").onclick = () => {
  todoState.tasks.forEach(t => t.completed = true);
  renderTasks();
};

document.getElementById("deleteCompletedBtn").onclick = () => {
  todoState.tasks = todoState.tasks.filter(t => !t.completed);
  renderTasks();
};

document.getElementById("clearAllBtn").onclick = () => {
  todoState.tasks = [];
  renderTasks();
};

renderTasks();
