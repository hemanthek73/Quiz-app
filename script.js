

const questions=[
  {
    question:"who is the future wife of Patil?",
    answers:[
      {text:"Bindu",correct:false},
      {text:"Sindu",correct:false},
      {text:"Hindu",correct:true},
      {text:"Deepu",correct:false},
]
  },
  {
    question:"who is the Prime minister of India?",
    answers:[
      {text:"Modi",correct:true},
      {text:"Rahul Gandi",correct:false},
      {text:"Siddaramayya",correct:false},
      {text:"Kumarswamy",correct:false},
]
  },
  {
    question:"which is the smallest continent in the world?",
    answers:[
      {text:"Asia",correct:false},
      {text:"Australia",correct:true},
      {text:"Arctic",correct:false},
      {text:"Africa",correct:false},
]
  },
  {
    question:"which is the capital of India?",
    answers:[
      {text:"New Delhi",correct:true},
      {text:"karnataka",correct:false},
      {text:"kerala",correct:false},
      {text:"Mumbai",correct:false},
]
  },
  {
    question:"which is largest animal in the world?",
    answers:[
      {text:"Shark",correct:false},
      {text:"Blue whale",correct:true},
      {text:"Elephant",correct:false},
      {text:"Giraffe",correct:false},
]
  }
  
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}
function showQuestion(){
  resetState();
let currentQuestion=questions[currentQuestionIndex];
let questionNo=currentQuestionIndex + 1;
questionElement.innerHTML=questionNo +"."+currentQuestion.question;

currentQuestion.answers.forEach(answer => {
  const button=document.createElement("button");
  button.innerHTML=answer.text;
  button.classList.add("btn");
  answerButton.appendChild(button);
  if(answer.correct){
    button.dataset.correct=answer.correct;
  }
  button.addEventListener("click",selectAnswer);
});
}
function resetState(){
  nextButton.style.display="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }

}
function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct=="true";
if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
}else{
  selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button =>{
  if(button.dataset.correct==="true"){
    button.classList.add("correct");
  }
button.disabled=true;
});
nextButton.style.display="block";
}
function showScore(){
  resetState();
  questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="play Again";
  nextButton.style.display="block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
startQuiz();
  }
});
startQuiz();