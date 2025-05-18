const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career🚀",
    description: "",
    status: "todo",
  },
  {
    id: 2,
    title: "Conquer React⚛️",
    description: "",
    status: "todo",
  },
  {
    id: 3,
    title: "Understand Databases⚙️",
    description: "",
    status: "todo",
  },
  {
    id: 4,
    title: "Crush Frameworks🖼️",
    description: "",
    status: "todo",
  },
  {
    id: 5,
    title: "Master JavaScript💛",
    description: "",
    status: "doing",
  },
  {
    id: 6,
    title: "Never Give Up🏆",
    description: "",
    status: "doing",
  },
  {
    id: 7,
    title: "Explore ES6 Features🚀",
    description: "",
    status: "done",
  },
  {
    id: 8,
    title: "Have fun 🥳",
    description: "",
    status: "done",
  },
];

var todoDiv = document.getElementById("todo-tasks");
var doingDiv = document.getElementById("doing-tasks");
var doneDiv = document.getElementById("done-tasks");

initialTasks.forEach((task) => {
  // Create a new task element
  var taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.innerText = task.title;

  // Create a new task title element
  if (task.status === "todo") {
    todoDiv.appendChild(taskDiv);
  } else if (task.status === "doing") {
    doingDiv.appendChild(taskDiv);
  } else if (task.status === "done") {
    doneDiv.appendChild(taskDiv);
  }
});

// This function updates the Kanban columns
function updateCanban() {}

// Keep adding tasks until there are 6 in total
while (initialTasks.length < 6) {
  addTask();
}

// Alert user when task board is full
if (initialTasks.length === 6) {
  alert(
    "There are enough tasks on your board, please check them in the console."
  );
}

// Adds a new task by asking the user for input.
// Only allows 'todo', 'doing', or 'done' as status values.
function addTask() {
  const taskTitle = prompt("Enter task title:");
  const taskDescription = prompt("Enter task description:");
  let taskStatus = prompt(
    "Enter task status (todo, doing, done):"
  ).toLowerCase();

  while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  const newTask = {
    id: initialTasks.length + 1, // Auto-increment ID based on task count
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  };

  initialTasks.push(newTask); // Add the task to the array
}

updateCanban();

// Keep adding tasks until there are 6 in total
const getCompletedTasks = () =>
  initialTasks.filter((task) => task.status === "done");

// Display tasks in the console
console.log("All tasks: ", initialTasks);
console.log("Completed tasks: ", getCompletedTasks());
