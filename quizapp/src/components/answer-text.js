import React from 'react';
import PropTypes from 'prop-types';

/* 
 * Constants
 */

const propTypes = {
  answerText: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  selectAction: PropTypes.func.isRequired
}

/*
 * Answer Text Presentational Component
 * Function: displays list of possible answers, called from Quiz Container
 */

function AnswerText(props) {

  function isCorrect() {
    return (props.answerText === props.correctAnswer);
  }

  function setCorrectBtn() {
    return (
      <input
        type="button"
        className="answer-btn-correct"
        id={props.answerText}
        value={props.answerText}
        onClick={props.selectAction}
      />
    );
  }

  function setIncorrectBtn() {
    return (
      <input
        type="button"
        className="answer-btn-incorrect"
        id={props.answerText}
        value={props.answerText}
        onClick={props.selectAction}
      />
    );
  }

  return (
    <li className="answer-wrapper">
      {isCorrect() ? setCorrectBtn() : setIncorrectBtn()}
    </li>
  );
}

AnswerText.propTypes = propTypes;

export default AnswerText;
