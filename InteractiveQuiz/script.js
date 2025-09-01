const answers = [
    "green",
    ["html", "css", "Javascript"],
    ["Web 1", "Fundamentals of Web", "ID512"]
]

//trigger marking process BEFORE function, need button clicked first
const form = document.getElementById("quiz-form");
//const submitBtn = document.querySelector("button"); //selects all buttons
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getAnswers(e.target);
})

//get form answers from user
function getAnswers(theForm) {
    const answers = new FormData(theForm);
    const answerArray = (Array.from(answers));
    console.log(answerArray) 
}


//lower case all


//compare user answers to the correct answers
//give user feedback(score)

