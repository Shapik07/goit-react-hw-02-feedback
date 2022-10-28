import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="feedback">
        <ul className="listButton">
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
        </ul>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
