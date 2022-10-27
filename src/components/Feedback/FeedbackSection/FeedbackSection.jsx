import PropTypes from 'prop-types';

export const Section = ({ title = '', children }) => {
  return <Section title={title}>{children}</Section>;
};
