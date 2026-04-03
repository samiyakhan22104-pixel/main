let timeLeft = 120;
let timerInterval;

const questions = [

    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language"],
        answer: 0
    },

    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "Python"],
        answer: 1
    },

    {
        question: "Which language is used for web interactivity?",
        options: ["Java", "C++", "JavaScript"],
        answer: 2
    },

    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"],
        answer: 0
    },

    {
        question: "Which tag is used for links in HTML?",
        options: ["<a>", "<link>", "<href>"],
        answer: 0
    },

    {
        question: "Which is not a programming language?",
        options: ["HTML", "Python", "Java"],
        answer: 0
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->"],
        answer: 0
    },

    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape"],
        answer: 2
    },

    {
        question: "Which HTML tag is used for images?",
        options: ["<img>", "<image>", "<pic>"],
        answer: 0
    },

    {
        question: "Which property is used to change background color in CSS?",
        options: ["color", "bgcolor", "background-color"],
        answer: 2
    }

];


let currentQuestion = 0;
let score = 0;



function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("progress").innerText =
    "Question " + (currentQuestion + 1) + "/" + questions.length;
let optionsHTML = "";
    q.options.forEach((option, index) => {
        optionsHTML += `
    <label class="option">
        <input type="radio" name="option" value="${index}">
        ${option}
    </label>
`;

    });

    document.getElementById("options").innerHTML = optionsHTML;
}



function nextQuestion() {

    let selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        finishExam();
    }
}



function finishExam() {

    document.querySelector(".container").innerHTML = `
        <h2>🎉 Exam Completed</h2>
        <h3>Your Score: ${score}/${questions.length}</h3>
        <h3>Percentage: ${(score/questions.length*100).toFixed(2)}%</h3>
        <button onclick="location.reload()">Restart Exam</button>
    `;

}




function startTimer() {

    timerInterval = setInterval(function () {

        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 10) {
            document.getElementById("timer").style.color = "red";
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishExam();
        }

    }, 1000);
}



loadQuestion();
startTimer();

