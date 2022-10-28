import React from 'react';
import PropTypes from 'prop-types';
import { StatisticList, StatisticElement } from './FeedbackStatistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList className="Statistic-list">
      <StatisticElement className="key-good">Good: {good}</StatisticElement>
      <StatisticElement className="key-neutral">
        Neutral: {neutral}
      </StatisticElement>
      <StatisticElement className="key-bad">Bad: {bad}</StatisticElement>
      <StatisticElement className="key-total">Total: {total}</StatisticElement>
      <StatisticElement className="key-positive">
        Positive feedback: {positivePercentage} %
      </StatisticElement>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
