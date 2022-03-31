
const startButton =document.getElementById("start-btn")
const nextButton =document.getElementById("next-btn")

const questionContainerElement =document.getElementById("question-container")
const questionElement =document.getElementById("question")
const answerButtonsElement =document.getElementById("answer-buttons")

let shuffedQuestions,currectQuestionIndex;
let quizScore=0;


startButton.addEventListener("click",startGame)

nextButton.addEventListener("click",() =>{
    currectQuestionIndex++
    setnextQuestion
})


function startGame(){
    startButton.classList.add('hide')
    shuffedQuestions=questions.sort(()=> Math.random() -0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove("hide")
    setnextQuestion()
    quizScore=0
}




function setnextQuestion(){
    resetState();
    showQuestion(shuffedQuestions[currectQuestionIndex])
}


function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach((answer)=>{
        const button = document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffedQuestions.length>currectQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText ="restart"
        startButton.classList.remove('hide')
    }
    if(selectedButton.dataset=correct){
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
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
const questions=[
     {
        question:"Which one of these is Javascript farmewor",
        answers :[
            {text:'python',correct:false},
            {text:'react',correct:true},
            {text:'django',correct:false},
            {text:'ecillipse',correct:false}
        ],
    },
    {
        question:"Who is prime minister of india",
        answers :[
            {text:'Narendra modi',correct:true},
            {text:'nehru',correct:true},
            {text:'django',correct:false},
            {text:'ecillipse',correct:false}
        ],
    },
    {
        question:"3x4=?",
        answers :[
            {text:'3',correct:false},
            {text:'12',correct:true},
            {text:'4',correct:false},
            {text:'18',correct:false}
        ],
    },
]
