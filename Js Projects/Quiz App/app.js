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
var option = document.querySelectorAll(".option");
let main=document.getElementById("main")
let userSelectedOption;
let counter=1

// for changing question

function changeQuestion() {
    counter+=1

  quizData.forEach((value,i) => {
    if (value.id == 2 && counter==2) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 
        
      }
    
    }
   
  
})
    

  
  quizData.forEach((value) => {
    if (value.id == 3 && counter==3) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 4 && counter==4) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 4 && counter==4) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 5 && counter==5) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 6 && counter==6) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 7 && counter==7) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 8 && counter==8) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 9 && counter==9) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  quizData.forEach((value) => {
    if (value.id == 10 && counter==10) {
      question.innerText = value.id + ") " + value.question;
      for (let i = 0; i < option.length; i++) {
      option[i].innerText=value.options[i] 

      }
    }
    

  });
  

 
}



// for checking correct answer


 option.forEach((val)=>{
  val.option[i].addEventListener("click",()=>{
  userSelectedOption=val.innerText
  
   if (userSelectedOption==quizData[counter].answer) {
      val.style.backgroundColor="green"
      
      
    } else {
       val.style.backgroundColor="red"
      
    }
  })
 })

question.innerText = quizData[0].id + ") " + quizData[0].question;




