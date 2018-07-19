import React from 'react';
import PropTypes from 'prop-types';

/* 
 * Constants
 */

const propTypes = {
  scoreCorrect: PropTypes.number.isRequired,
  scoreTotal: PropTypes.number.isRequired
};

/*
 * Final Score Presentation Component
 * Function: displays the final score after quiz questions are completed
 */

function FinalScore(props) {
  return (
    <div className="final-score">
      <div className="final-score-box">
        <div className="final-score-text">
          <h1 className="score-text">Final Score</h1>
          <p>{props.scoreCorrect}/{props.scoreTotal}</p>
        </div>
      </div>
    </div>
  );
}

FinalScore.propTypes = propTypes;

export default FinalScore;