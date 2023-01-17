import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children, className}) => (
  <section className={css[className]}>
    {children}
  </section>
);

Section.propTypes = {
  class:PropTypes.string,
  children: PropTypes.element,
};

