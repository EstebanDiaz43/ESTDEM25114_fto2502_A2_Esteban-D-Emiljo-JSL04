const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

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

// Keep adding tasks until there are 6 in total
const getCompletedTasks = () =>
  initialTasks.filter((task) => task.status === "done");

// Display tasks in the console
console.log("All tasks: ", initialTasks);
console.log("Completed tasks: ", getCompletedTasks());
