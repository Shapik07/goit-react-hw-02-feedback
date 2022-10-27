import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <ul className="Statistic-list">
        <li className="key-good">Good: {good}</li>
        <li className="key-neutral">Neutral: {neutral}</li>
        <li className="key-bad">Bad: {bad}</li>
        <li className="key-total">Total: {total}</li>
        <li className="key-positive">
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
