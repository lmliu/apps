import React, { Component } from 'react';
import QuizContainer from './components/quiz-container';
import FinalScore from './components/final-score';
import './App.css';


/* json for quiz */

const QUIZ = [
  {
      question: "What color is the sky?",
      answers: [
          {
              text: "blue"
          },
          {
              text: "red"
          },
          {
              text: "green"
         
          }
      ],
      correctAnswer: "blue"
  },
  {
      question: "What's 1+1?",
      answers: [
          {
              text: "2"
          },
          {
              text: "5"
          },
          {
              text: "-10000",
          }
      ],
      correctAnswer: "2"
  },
  {
      question: "How many letters are in the word snake?",
      answers: [
          {
              text: "5"
          },
          {
              text: "3"
          },
          {
              text: "250",
          }
      ],
      correctAnswer: "5"
  },
  {
      question: "How many letters are in the word tea?",
      answers: [
          {
              text: "5"
          },
          {
              text: "3"
          },
          {
              text: "250",
          }
      ],
      correctAnswer: "5"
  },
  {
      question: "Which direction does the sun rise?",
      answers: [
          {
              text: "north"
          },
          {
              text: "west"
          },
          {
              text: "east",
          }
      ],
      correctAnswer: "east"
  },
  {
      question: "Which answer is right?",
      answers: [
          {
              text: "right"
          },
          {
              text: "wrong"
          },
          {
              text: "left",
          }
      ],
      correctAnswer: "right"
  },
  {
      question: "How many members are in Migos?",
      answers: [
          {
              text: "1"
          },
          {
              text: "2"
          },
          {
              text: "3",
          }
      ],
      correctAnswer: "3"
  },
  {
      question: "What year is it?",
      answers: [
          {
              text: "2018"
          },
          {
              text: "2003"
          },
          {
              text: "3000",
          }
      ],
      correctAnswer: "2018"
  },
  {
      question: "Yes?",
      answers: [
          {
              text: "Yes"
          },
          {
              text: "No"
          }
      ],
      correctAnswer: "Yes"
  },
  {
      question: "The mitochondria is the ___ of the cell?",
      answers: [
          {
              text: "powerhouse"
          },
          {
              text: "powerhome"
          },
          {
              text: "powerboat",
          }
      ],
      correctAnswer: "powerhouse"
  },
];


/* App container component */

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      counter: 0,
      question: '',
      answerList: [],
      selectedAnswer: '',
      correctAnswer: '',
      score: 0
    };

    this.handleSelection = this.handleSelection.bind(this);
  }

  componentWillMount() {
    const initIdx = 0;

    const answerArry = 
      QUIZ.map(question => 
        question.answers
      );

    this.setState({
      question: QUIZ[initIdx].question,
      answerList: answerArry[initIdx],
      correctAnswer: QUIZ[initIdx].correctAnswer
    });
  }


  /* display a quiz card with questions/answers */
  showQuizQuestion() {
    return (
      <QuizContainer
        question={this.state.question}
        answerList={this.state.answerList}
        selectedAnswer={this.state.selectedAnswer}
        correctAnswer={this.state.correctAnswer}
        scoreCorrect={this.state.score}
        scoreTotal={this.state.counter}
        selectAction={this.handleSelection}
      />
    );
  }

  /* displays the final score */
  showFinalScore() {
    return (
      <FinalScore
        scoreCorrect={this.state.score}
        scoreTotal={QUIZ.length}
      />
    );
  }

  /* determines if answer is correct and handles state changes */
  handleSelection(event) {
    const chosenAnswer = event.currentTarget.value;
    this.setState ({
      selectedAnswer: chosenAnswer
    });

    /* if right answer is selected */
    if (chosenAnswer === this.state.correctAnswer) 
      this.incrementTally(chosenAnswer);

    this.handleNextStep();
  }

  /* increments correct answer count by one */
  incrementTally(answer) {
    this.setState((prevState, props) => 
      ({score: prevState.score + 1}));
  }


  /* determines whether to show next quiz card or show score */
  handleNextStep() {

    const delayTime = 500;

    /* if more questions, show next question */
    if (this.state.counter < (QUIZ.length-1)) {
        setTimeout(() => this.setStateNew(), delayTime);

    /* if no more questions, set endOfQuiz flag */
    } else {
        setTimeout(() => this.setState({ endOfQuiz: true }), delayTime);
    }    
  }

  /* set state for new question */
  setStateNew() {
    const newCounter = this.state.counter + 1;

    this.setState({
      counter: newCounter,
      question: QUIZ[newCounter].question,
      answerList: QUIZ[newCounter].answers,
      correctAnswer: QUIZ[newCounter].correctAnswer
    });
  }

  render() {
    return (
      <div className="quiz-wrapper">
        {this.state.endOfQuiz ? this.showFinalScore() : this.showQuizQuestion()}
      </div>
    );
  }

}

export default App;
