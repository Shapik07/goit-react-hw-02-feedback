import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Feedback/FeedbackStatistics/FeedbackStatistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;
  positivePercentage = null;

  handleClick = e => {
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.positivePercentage = ((this.state.good / this.total) * 100).toFixed();
  };

  onRender() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render() {
    this.onRender();
    const { good, neutral, bad } = this.state;
    const { total, positivePercentage } = this;

    return (
      <section className="feedback">
        <FeedbackOptions
          onLeaveFeedback={this.handleClick}
          options={Object.keys(this.state)}
          title="Please leave feedback"
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          title="Statistics"
        />
      </section>
    );
  }
}

export default Feedback;
