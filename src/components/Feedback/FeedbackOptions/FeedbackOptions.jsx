import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Options extends Component {
  render() {
    const { stats, onLeaveFeedback } = this.props;

    return (
      <div className="feedback">
        <ul className="listButton">
          {stats.map((stat, index) => (
            <li key={index}>
              <button
                type="button"
                className="button"
                name={stat}
                onClick={onLeaveFeedback}
              >
                {stat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Options;
