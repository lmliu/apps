import React from 'react';
import PropTypes from 'prop-types';

import AnswerText from './answer-text';
import ScoreTally from './score-tally';

/* 
 * Constants
 */

const propTypes = {
  question: PropTypes.string.isRequired,
  answerList: PropTypes.array.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  scoreCorrect: PropTypes.number.isRequired,
  scoreTotal: PropTypes.number.isRequired,
  selectAction: PropTypes.func.isRequired
}

/*
 * Quiz Container Component
 * Function: displays quiz card with question and potential answers 
 * and score tally
 */

function Quiz(props) {

  return (
    <div 
      key={props.scoreTotal}
      className="quiz-container"
    >
      <h1 className="question-text">{props.question}</h1>
      <ul className="answer-list">
        {props.answerList.map(answerChunk => (
          <AnswerText
            key={answerChunk.text}
            answerText={answerChunk.text}
            correctAnswer={props.correctAnswer}
            selectedAnswer={props.selectedAnswer}
            selectAction={props.selectAction}
          />
        ))}
      </ul>
      <ScoreTally
        correct={props.scoreCorrect}
        total={props.scoreTotal}
      />
    </div>
  );
}

Quiz.propTypes = propTypes;

export default Quiz;
