// Typing Effect

const words = [
    "Front-End Developer",
    "Python Programmer",
    "AI Enthusiast",
    "MCA Student"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if(charIndex < words[wordIndex].length){

        typing.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);
    }
}

function deleteEffect(){

    if(charIndex > 0){

        typing.textContent =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);
    }

    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();


// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    alert(
    "Thank You! Your message has been submitted."
    );

    this.reset();
});

/* ==========================
   TO-DO LIST WITH STORAGE
========================== */

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks(){

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li =
        document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleTask(${index})">
                ${task.text}
            </span>

            <button
            class="delete-btn"
            onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function addTask(){

    const input =
    document.getElementById("taskInput");

    if(input.value.trim()===""){
        return;
    }

    tasks.push({
        text:input.value,
        completed:false
    });

    saveTasks();
    renderTasks();

    input.value="";
}

function toggleTask(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();
    renderTasks();
}

renderTasks();


/* ==========================
   PRODUCT LISTING
========================== */

const products = [

{
name:"Laptop",
category:"electronics",
price:50000
},

{
name:"Headphones",
category:"electronics",
price:2500
},

{
name:"Smartphone",
category:"electronics",
price:20000
},

{
name:"Shoes",
category:"fashion",
price:1500
},

{
name:"Jacket",
category:"fashion",
price:3000
},

{
name:"Watch",
category:"fashion",
price:5000
}

];

function displayProducts(productData){

    const container =
    document.getElementById(
        "productContainer"
    );

    container.innerHTML="";

    productData.forEach(product=>{

        container.innerHTML += `
        <div class="product-card">

            <h3>${product.name}</h3>

            <p>
            Category:
            ${product.category}
            </p>

            <p>
            ₹${product.price}
            </p>

        </div>
        `;
    });
}

function filterAndSort(){

    let filtered =
    [...products];

    const category =
    document.getElementById(
        "filterCategory"
    ).value;

    const sort =
    document.getElementById(
        "sortPrice"
    ).value;

    if(category !== "all"){

        filtered =
        filtered.filter(
            p=>p.category===category
        );
    }

    if(sort==="low"){

        filtered.sort(
            (a,b)=>a.price-b.price
        );
    }

    if(sort==="high"){

        filtered.sort(
            (a,b)=>b.price-a.price
        );
    }

    displayProducts(filtered);
}

document
.getElementById("filterCategory")
.addEventListener(
"change",
filterAndSort
);

document
.getElementById("sortPrice")
.addEventListener(
"change",
filterAndSort
);

displayProducts(products);