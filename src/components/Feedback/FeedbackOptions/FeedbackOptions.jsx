import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonsList } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="feedback">
        <ButtonsList className="listButton">
          {options.map((opt, index) => (
            <li key={index}>
              <button
                type="button"
                className="button"
                name={opt}
                onClick={onLeaveFeedback}
              >
                {opt}
              </button>
            </li>
          ))}
        </ButtonsList>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
