import React from 'react';
import PropTypes from 'prop-types';

/* 
 * Constants
 */

const propTypes = {
  correct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

/*
 * Score Tally Presentational Component
 * Function: displays current score tally on quiz questions
 */

function ScoreTally(props) {
  return (
    <div className="score-tally-wrapper">
      <p className="score-tally-text">
        <span>{props.correct}</span> out of <span>{props.total} correct so far</span>
      </p>
    </div>
  );

}

ScoreTally.propTypes = propTypes;

export default ScoreTally;
