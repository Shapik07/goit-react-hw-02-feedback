import PropTypes from 'prop-types';

export const Section = ({ title = '', children }) => {
  return <Section title={title}>{children}</Section>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

