var Questions = [
    {
        question : "What does HTML stand for?",
        answers : {
            a : "Hyper type marked language",
            b : "Hyper text markup language",
            c : "Hyper text makeup language",
            d : "Hyper terrain mock language"
        },
        correctAnswer : "b"
    },
    {
        question : "What does CSS stand for?",
        answers : {
            a : "Cascading Style Sheet",
            b : "Complex Style Syntax",
            c : "Complete Sound Sheet",
            d : "Complete Sheet Style"
        },
        correctAnswer : "a"
    },
    {
        question : "Inside which HTML element do we put the JavaScript?",
        answers : {
            a : "<js>",
            b : "<javascript>",
            c : "<scripting>",
            d : "<script>"
        },
        correctAnswer : "d"
    },
    {
        question : "How do you create a function in JavaScript?",
        answers : {
            a : "function:myFunction()",
            b : "function = myFunction()",
            c : "function myFunction()",
            d : "function myFunction{}"
        },
        correctAnswer : "c"
    },
    {
        question : "How can you add a comment in a JavaScript?",
        answers : {
            a : "//Comment",
            b : "/*Comment*/",
            c : "<!--Comment-->",
            d : "#Comment"
        },
        correctAnswer : "a"
    },
    
]

var quiz = document.getElementById("quiz");

function startQuiz(q){
    quiz.children[1].style.display = "none";
    for(var i = 2 ; i<quiz.childElementCount;i++){
        quiz.children[i].style.display = "";
        
    }
    var idx = 0;
    for(var j = 4 ; j<8;j++){
        
        quiz.children[j].children[1].appendChild(document.createTextNode(Object.values(Object.values(Questions)[0].answers)[idx]))
        idx+=1;
    }
    var questionNumber = Number(q)+1;
    quiz.children[3].appendChild(document.createTextNode("Q"+ questionNumber +" : "+ Object.values(Questions)[q].question))
    quiz.children[8].children[0].appendChild(document.createTextNode("Q: "+questionNumber+" of "+Questions.length))

  

}
