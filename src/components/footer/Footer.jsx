import PropTypes from 'prop-types';
import style from './footer.module.css';

const Footer = ({ year }) => {
  return (
    <div className={style.footer}>
      <p>&copy; {year} all rigths reserved</p>
    </div>
  );
};

Footer.propTypes = {
  year: PropTypes.number
};

export default Footer;
