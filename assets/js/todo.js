// status variable for input elements
let message = document.getElementById('status_msg');

// input variables
let add = document.getElementById('addTask');
let date = document.getElementById('taskDate');
let details = document.getElementById('taskDetails');

// add task button variable
let button = document.getElementById("btnTasks");

// added task varable
let tasks = document.getElementById("tasks");

// status input check function
const checkInput = () => {
    if (add.value === "") {
        message.innerHTML = "Task name cannot be empty";
        console.log('failure');
    }
    else if (date.value === "") {
        message.innerHTML = "Task date cannot be empty";
        console.log('failure');
    }
    else if (details.value === "") {
        message.innerHTML = "Tasks details cannot be empty";
        console.log('failure');
    } else {
        message.innerHTML = ""
        console.log('success');

        acceptData();
    }
}

// event listener for the input elements
document.getElementById("btnTasks").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("button clicked");

    checkInput();
});

// data object that stores the input values
let data = {};

// function that accepts the input value
const acceptData = () => {
    data.add = add.value;
    data.date = date.value;
    data.details = details.value;
    console.log(data);

    createTask();
}

// reset form input fields
const resetForm = () => {
    date.value = "";
    details.value = "";
    add.value = "";
}

// adds task task from input values to task list
let createTask = () => {
    tasks.innerHTML += `
    <div id="main_task" class="main_task border-3 p-3 border-success bg-success w-75 d-flex mx-auto my-3">
        <div class="w-75">
            <h4>${data.add}</h4>
            <p>${data.date}</p>
            <p>${data.details}</p>
        </div>
        <span class="w-25 d-flex flex-column gap-4 justify-content-center">
            <i onClick="editPost(this)" class="fa fa-edit fs-3"></i>
            <i onClick="deleteTask(this)" class="fa fa-trash fs-3"></i>
        </span>
    </div>
    `;

    resetForm();
}


// deleteing a task
const deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

const editPost = (e) => {
    let selectedTask = e.parentElement.parentElement;

    add.value = selectedTask.children[0].innerHTML;
    date.value = selectedTask.children[1].innerHTML;
    details.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
}