import PropTypes from 'prop-types';
import styles from './header.module.css';

const Header = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
