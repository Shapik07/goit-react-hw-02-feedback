import PropTypes from 'prop-types';

export const Notification = message => {
  <span className="notification">{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
