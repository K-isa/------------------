

// вытаскиваем все в переменные

const newQuestion = document.querySelector('.nextQuestion')
const answerButtons = Array.from(document.querySelectorAll('.button'));

const headline = document.querySelector('#question')

// передаем рандомные вопросы и ответы

function randomQuestion() {
  newQuestion.style.display = "none ";

  const index = Math.floor((Math.random() * countries.length));
  headline.textContent = countries[index];
  const rigthAnswerButtonIndex = Math.floor(Math.random() * answerButtons.length);

  for (button of answerButtons) {
    if (answerButtons.indexOf(button) === rigthAnswerButtonIndex) {
      button.classList.add('rigthAnswer')
      button.textContent = capitals[index]
    } else {
      const randomAnswer = capitals[Math.floor((Math.random() * capitals.length))]
      if (randomAnswer != capitals[index]) {
        button.textContent = randomAnswer;
      } else {
        button.textContent = capitals[Math.floor((Math.random() * capitals.length))]
      }
    }
  }

}

randomQuestion()

// обработчик при клике на одну из кнопок

answerButtons.forEach(item => {
  item.addEventListener("click", rigthAnswer)
})


function rigthAnswer(event) {
  const rightButton = document.querySelector(".rigthAnswer");
  answerButtons.forEach((item) => {
    item.style.pointerEvents = 'none';
  });
  rightButton.style.backgroundColor = '#90EE90';
  increaseAnswers();
  newQuestion.style.display = "inline";
  if (event.target.className.includes('rigthAnswer')) {
    increaseRigthAnswers();
  } else {
    event.target.style.backgroundColor = '#DC143C';
  }
  rightButton.classList.remove('rigthAnswer');
}


// обработчик на кнопку следующий вопрос и генерация вопроса

newQuestion.addEventListener('click', getNewQuestion)

function getNewQuestion() {
  answerButtons.forEach((item) => {
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
  numberOfQuestions.innerText = Number(numberOfQuestions.textContent) + 1;
}









