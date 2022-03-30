
const startButton =document.getElementById("start-btn")
const nextButton =document.getElementById("next-btn")

const questionContainerElement =document.getElementById("question-container")
const questionElement =document.getElementById("question")
const answerButtonElements =document.getElementById("answer-buttons")

let shuffedQuestions,currectQuestionIndex;
let quizScore=0;


function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct

    setStatusClass(document.body.correct)
    Array.from()
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classsList.add("correct")
    }else{
        element.classsList.add('wrong')
    }

}

function clearStatusClass(element){
    element.classsList.remove('correct')
    element.classsList.remove('wrong')
}
const question=[
    {
    question:"Which one of these is Javascript farmewor",
    answers :[
        {text:'python',correct:false},
        {text:'react',correct:true},
        {text:'django',correct:false},
        {text:'ecillipse',correct:false},
    ],
},
{
    question:"Who is prime minister of india",
    answers :[
        {text:'Narendra modi',correct:true},
        {text:'nehru',correct:true},
        {text:'django',correct:false},
        {text:'ecillipse',correct:false},
    ],
},
{
    question:"3x4=?",
    answers :[
        {text:'3',correct:false},
        {text:'12',correct:true},
        {text:'4',correct:false},
        {text:'18',correct:false},
    ],
},
]
