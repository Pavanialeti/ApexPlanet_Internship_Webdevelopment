// Profile Elements
const userName = document.getElementById("userName");
const userProfession = document.getElementById("userProfession");
const saveProfile = document.getElementById("saveProfile");
const displayProfile = document.getElementById("displayProfile");

// Save Profile
saveProfile.addEventListener("click", function(){

    const name = userName.value.trim();
    const profession = userProfession.value.trim();

    if(name === "" || profession === ""){
        alert("Please fill all fields");
        return;
    }

    displayProfile.innerHTML = `
        <h3>${name}</h3>
        <p>Profession: ${profession}</p>
    `;

});

// Selecting Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task Function
addBtn.addEventListener("click", function(){

    // Get Input Value
    const taskText = taskInput.value;

    // Check Empty Input
    if(taskText.trim() === ""){
        alert("Please enter a task");
        return;
    }

    // Create List Item
    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    // Add Task to List
    taskList.appendChild(li);

    // Clear Input Box
    taskInput.value = "";

    // Delete Task
    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

});