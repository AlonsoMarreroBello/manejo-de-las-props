import PropTypes from 'prop-types';
import styles from './footer.module.css';

const Footer = ({ year }) => {
  return (
    <div className={styles.footer}>
      <p> {year} all rigths reserved</p>
    </div>
  );
};

Footer.propTypes = {
  year: PropTypes.string
};

export default Footer;
