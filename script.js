const addbtn = document.getElementById("addbtn");
const taskInput = document.getElementById("taskInput");
const tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.backgroundColor ="rgba(251, 89, 89, 1)";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    tasklist.appendChild(li);
    taskInput.value = "";
    span.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
    }); 
});

