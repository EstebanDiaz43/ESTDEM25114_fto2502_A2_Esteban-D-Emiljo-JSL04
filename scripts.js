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
updateCanban();

// This function updates the Kanban columns
// Clear the existing tasks in the columns
function updateCanban() {
  todoDiv.innerHTML = "";
  doingDiv.innerHTML = "";
  doneDiv.innerHTML = "";

  initialTasks.forEach((task) => {
    // Create a new task element
    var taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.setAttribute("id", task.id);
    taskDiv.innerText = task.title;
    taskDiv.onclick = () => {
      setUpdateTaskValues(taskDiv.getAttribute("id"));
    };

    // Create a new task title element
    if (task.status === "todo") {
      todoDiv.appendChild(taskDiv);
    } else if (task.status === "doing") {
      doingDiv.appendChild(taskDiv);
    } else if (task.status === "done") {
      doneDiv.appendChild(taskDiv);
    }
  });
}

// Adds a new task by asking the user for input.
// Only allows 'todo', 'doing', or 'done' as status values.
function addTask() {
  const taskTitle = document.getElementById("add-task-title").value;
  const taskDescription = document.getElementById("add-task-description").value;
  const taskStatus = document.getElementById("add-task-status").value;

  const newTask = {
    id: initialTasks.length + 1, // Auto-increment ID based on task count
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  };

  initialTasks.push(newTask); // Add the task to the array

  updateCanban();
}

function setUpdateTaskValues(taskId) {
  currentTask = initialTasks.find((task) => task.id === +taskId);
  console.log(currentTask);
}

// Keep adding tasks until there are 6 in total
const getCompletedTasks = () =>
  initialTasks.filter((task) => task.status === "done");

// Display tasks in the console
console.log("All tasks: ", initialTasks);
console.log("Completed tasks: ", getCompletedTasks());
