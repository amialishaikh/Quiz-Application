const question = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const nextBtn = document.querySelector(".nextBtn");
const result = document.querySelector(".result"); 
const container = document.querySelector(".container")

const quizQuestions = [
    {
        question: "What is the capital of pakistan?",
        options: ["karachi", "islamabad", "lahore", "faisalabad"],
        correctAnswer: "islamabad"
    },
    {
        question: "Which campus called headoffice of syalni?",
        options: ["Numaish", "gulshan", "buhadrabad", "naya nazimabad"],
        correctAnswer: "buhadrabad"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
        correctAnswer: "Blue Whale"
    },
   {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
        correctAnswer: "William Shakespeare"
   }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function printInfo() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    question.innerHTML = currentQuestion.question;
    option1.innerHTML = currentQuestion.options[0];
    option2.innerHTML = currentQuestion.options[1];
    option3.innerHTML = currentQuestion.options[2];
    option4.innerHTML = currentQuestion.options[3];

    document.querySelectorAll('input[name="quiz-option"]').forEach(input => input.checked = false);
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption.innerHTML === currentQuestion.correctAnswer) {
        correctAnswers++;
    }
}

option1.addEventListener("click", function() { checkAnswer(option1); });
option2.addEventListener("click", function() { checkAnswer(option2); });
option3.addEventListener("click", function() { checkAnswer(option3); });
option4.addEventListener("click", function() { checkAnswer(option4); });

nextBtn.addEventListener("click", function() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        printInfo();
    } else {
        container.innerHTML = `
            <div style="font-size: 35px; font-weight: bold; text-align: center; margin-top: 20px;">
                You answered ${correctAnswers} out of ${quizQuestions.length} questions correctly!
            </div>`;
        nextBtn.disabled = true; 
    }
    
});

printInfo();
