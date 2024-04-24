import PropTypes from 'prop-types';
import style from './card.module.css';

const Card = ({ charName, status, species, gender, location, created }) => {
  return (
    <div className={style.card}>
      <div>
        <h3>{charName}</h3>
        <p>{status}</p>
      </div>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{location}</p>
      <p>{created}</p>
      <span>
        <button>Perfil</button>
        <button>Contacto</button>
      </span>
    </div>
  );
};

Card.propTypes = {
  charName: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  created: PropTypes.string
};

export default Card;
