// =================== QUIZ ===================

const questions = [
{
question:"Which language is used for web page styling?",
answers:[
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Python", correct:false},
{text:"Java", correct:false}
]
},

{
question:"Which keyword is used to declare a variable in JavaScript?",
answers:[
{text:"int", correct:false},
{text:"var", correct:true},
{text:"string", correct:false},
{text:"float", correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Microsoft", correct:false},
{text:"Google", correct:false},
{text:"Netscape", correct:true},
{text:"IBM", correct:false}
]
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function startQuiz(){
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){

    resetState();

    let current = questions[currentQuestion];

    questionElement.innerHTML = current.question;

    current.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");

        button.addEventListener("click", () => {

            if(answer.correct){
                score++;
                button.style.background = "green";
            }
            else{
                button.style.background = "red";
            }

            Array.from(answerButtons.children).forEach(btn=>{
                btn.disabled = true;
            });

        });

        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "block";

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", ()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }
    else{
        questionElement.innerHTML = "Quiz Completed 🎉";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";

        document.getElementById("score").innerHTML =
        `Your Score: ${score} / ${questions.length}`;
    }
});

startQuiz();


// ================= API FETCH =================

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", getJoke);

async function getJoke(){

    try{

        const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        document.getElementById("joke").innerHTML =
        `${data.setup}<br><br><b>${data.punchline}</b>`;

    }

    catch(error){

        document.getElementById("joke").innerHTML =
        "Failed to fetch joke.";
    }
}