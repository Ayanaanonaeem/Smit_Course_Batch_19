const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: "CSS",
  },
  {
    id: 3,
    question: "Which language is mainly used for web interactivity?",
    options: ["C++", "Java", "JavaScript", "PHP"],
    answer: "JavaScript",
  },
  {
    id: 4,
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Meta", "Apple"],
    answer: "Meta",
  },
  {
    id: 5,
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    id: 6,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: "//",
  },
  {
    id: 7,
    question: "Which hook is used to manage state in React?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState",
  },
  {
    id: 8,
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "function", "const"],
    answer: "let",
  },
  {
    id: 9,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    id: 10,
    question: "Which JavaScript method converts JSON into an object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: "JSON.parse()",
  },
];

const question = document.getElementById("question");
const option = document.querySelectorAll(".option");

let counter = 0;

function showQuestion() {
     question.innerText=quizData[counter].id+")"+quizData[counter].question

     for (let i = 0; i < option.length; i++) {
     
      
      option[i].innerText=quizData[counter].options[i]

      option[i].style.backgroundColor=""

      
      
     }

}
showQuestion()


function changeQuestion() {
  if (counter<quizData.length-1) {
    counter++
    showQuestion()
  }else{
    alert("quiz finished")
  }

}

function previousQuestion() {
  if(counter> 0){
    counter--;
    showQuestion()
  }
}

option.forEach(val => {
  val.addEventListener("click",()=>{
    if(val.innerText==quizData[counter].answer){
      
      val.style.backgroundColor="green"
      
    }else{
      
      val.style.backgroundColor="red"
    }
    
    
  })
  
});