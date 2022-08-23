var questionArray = [
    {
        question: "1. How many stanzas are there in Pakistan's national anthem ?",
        answer: "Three",
        options: ["Three", "Two", "Five"],
    },

    {
        question: "2. Abbreviation of AI ?",
        answer: "Artifical Intelligence",
        options: ["none of these", "Artificial Intelligence", "Artifact Intelligence"],
    },

    {
        question: "3. Pakistan came into being in ?",
        answer: "1947",
        options: ['1960', '1974', '1947'],
    },

    {
        question: "4. HTML stands for?",
        answer: "Hypertext Markup Language",
        options: ['Hypertext Makeup Language', 'Home-Tool Markup Language', 'HyperLinks Markup Language'],
    },

    {
        question: "5. Who is making the Web standards?",
        answer: "The World Wide Web Consortium",
        options: ['Google', 'The World Wide Web Consortium', 'Mozilla'],
    },

    {
        question: "6. Choose the correct HTML element for the largest heading:",
        answer: "h6",
        options: ['h6', 'h1', 'heading'],
    },

    {
        question: "7. An iframe is used to display a web page within a web page.",
        answer: 'True',
        options: ['False', 'True', 'There is no such thing'],
    },

    {
        question: "8. Choose the correct HTML element for the largest heading:",
        answer: "br",
        options: ['lb', 'br', 'break'],
    },

    {
        question: "9. How can you make a numbered list?",
        answer: "ol",
        options: ['list', 'ol', 'ul'],
    },

    {
        question: "10. How can you make a bulleted list?",
        answer: "ul",
        options: ['list', 'ol', 'ul'],
    }

]
var currentQuestion = 0;
var score = 0;
function showQuestion() {
    // show q
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionArray[currentQuestion].question;

    // show options
    var optionElement = document.getElementsByClassName('optionElement');
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionArray[currentQuestion].options[i];
    }
}
function displayResult() {
    alert("You scored : " + score)
}
function nxtQuestion() {
    if (currentQuestion > questionArray.length - 1) {
        displayResult()
    } else {
        validate(currentQuestion);
        currentQuestion++;
        if (currentQuestion < questionArray.length)
            showQuestion(currentQuestion)
    }
    removeActive();
}

function putActive(e) {
    removeActive()
    e.classList.add("active")
}

function removeActive() {
    var active = document.getElementsByClassName('active');
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
    }
}
function validate(e) {
    console.log("validate called");
    var active = document.getElementsByClassName('active');
    if (active[0].innerHTML == questionArray[e].answer) {
        score += 1;
    }
}
