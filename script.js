

// вытаскиваем все в переменные

const button = document.querySelectorAll('button');
const newQuestion = document.querySelector('.nextQuestion')
const answerbuttons = document.querySelectorAll('.button')

const headline = document.querySelector('#question')
const button1 = document.querySelector('.test-answer__1')
const button2 = document.querySelector('.test-answer__2')
const button3 = document.querySelector('.test-answer__3')
const button4 = document.querySelector('.test-answer__4')
const arrayButtons = [button1, button2, button3, button4]

// передаем рандомные вопросы и ответы

function randomQuestion() {
  newQuestion.style.display = "none ";

  const question = countries[Math.floor((Math.random() * countries.length))]
  headline.textContent = question;
  const randomButton = Math.floor(Math.random() * 4)

  for (item of arrayButtons) {
    if (arrayButtons.indexOf(item) === randomButton) {
      item.classList.add('rigthAnswer')
      item.textContent = capitals[countries.indexOf(question)]
    } else {
      let randomAnswer = capitals[Math.floor((Math.random() * capitals.length))]
      if (randomAnswer != capitals[countries.indexOf(question)]) {
        item.textContent = randomAnswer;
      } else {
        item.textContent = capitals[Math.floor((Math.random() * capitals.length))]
      }
    }
  }

}

randomQuestion()

// обработчик при клике на одну из кнопок

button.forEach(item => {
  item.addEventListener("click", rigthAnswer)
})


function rigthAnswer(event) {
  answerbuttons.forEach((item) => {
    item.style.pointerEvents = 'none';
  })
  if (event.target.className.includes('rigthAnswer')) {
    event.target.style.backgroundColor = '#90EE90';
    increaseRigthAnswers()
    increaseAnswers()
    newQuestion.style.display = "inline";

  } else {
    event.target.style.backgroundColor = '#DC143C';
    increaseAnswers()
    newQuestion.style.display = "inline";

  }
  event.target.classList.remove('rigthAnswer')
}


// обработчик на кнопку следующий вопрос и генерация вопроса

newQuestion.addEventListener('click', getNewQuestion)

function getNewQuestion() {
  button.forEach((item) => {
    item.style.pointerEvents = 'all';
    item.style.backgroundColor = '#ffffff'
  })

  randomQuestion()
}

// счетчики ответов

function increaseRigthAnswers() {
  const rigthQuestions = document.querySelector('.counter-right__number');
  rigthQuestions.innerText = Number(rigthQuestions.textContent) + 1;
}

function increaseAnswers() {
  const numberOfQuestions = document.querySelector('.counter-questions__number');
  numberOfQuestions .innerText = Number(numberOfQuestions.textContent) + 1;
}









