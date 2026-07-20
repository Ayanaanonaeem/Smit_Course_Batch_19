import './App.css'

function App() {
 const quizQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    correctAnswer: "CSS"
  },
  {
    id: 3,
    question: "Which company developed React?",
    options: [
      "Google",
      "Microsoft",
      "Facebook",
      "Apple"
    ],
    correctAnswer: "Facebook"
  },
  {
    id: 4,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      "let",
      "var",
      "const",
      "static"
    ],
    correctAnswer: "const"
  },
  {
    id: 5,
    question: "Which method is used to add an item at the end of an array?",
    options: [
      "pop()",
      "shift()",
      "push()",
      "unshift()"
    ],
    correctAnswer: "push()"
  }
];

  return (
   <>
    <h1 className='head'>Quiz Application</h1>
    <div id='main'>
      <div id='main-1'>
        {
          quizQuestions.map((quiz)=>{
            return(
              <p>Question no {quiz.id}</p>
            )
          })
        }
        <hr />
        <p className='para'>1)   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odio.</p>
        <div className="option-main">
       <p className='option'>a. lion</p>
       <p className='option'>b. horse</p>
       <p className='option'>c. cheetah</p>
       <p className='option'>d. giraffe</p>
       </div>
       <div className="buttons">
        <button className='btn-1'>&lt;&lt;</button>
        <button className='btn-2'>&gt;&gt;</button>
       </div>
      </div>
    </div>
   </>
  )
}

export default App
