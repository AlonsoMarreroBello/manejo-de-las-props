import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendar,
  faCommentDots,
  faLocationDot,
  faMars,
  faPerson,
  faUser,
  faUserAstronaut,
  faVenus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from './card.module.css';

library.add(
  faUser,
  faCommentDots,
  faPerson,
  faVenus,
  faMars,
  faLocationDot,
  faCalendar,
  faUserAstronaut
);

const Card = ({ character }) => {
  const { id, charName, status, species, gender, location, created } =
    character;

    const formatDate = () => {
      const date = new Date(created);
      const weekDay = date.toLocaleString('es-ES', { weekday: 'long' });
      const day = date.getDate();
      const month = date.toLocaleString('es-ES', { month: 'long' });
      const year = date.getFullYear();
  
      return `${weekDay}, ${day} de ${month} de ${year}`;
  };

  const formatedCreated = formatDate();
  
  return (
    <div className={style.card}>
      <div className={style.cardWrapper}>
        <div className={style.cardHeader}>
          <img
            className={style.cardAvatar}
            src={`src/assets/images/${id}.jpeg`}
            alt="avatar"
          />
          <div className={style.cardPrimaryInfo}>
            <h3 className={style.cardName}>{charName}</h3>
            <p
              className={`${style.cardStatus} ${status === 'Alive' ? style.statusAlive : style.statusDead}`}
            >
              {status}
            </p>
          </div>
        </div>
        <p>
          <FontAwesomeIcon icon={ species === 'Human' ? faPerson : faUserAstronaut} className={style.cardIconBlue} />
          {species}
        </p>
        <p>
          <FontAwesomeIcon
            icon={gender == 'Female' ? faVenus : faMars}
            className={style.cardIconBlue}
          />
          {gender}
        </p>
        <p>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={style.cardIconBlue}
          />
          {location}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} className={style.cardIconBlue} />
          {formatedCreated}
        </p>
        <p className={style.cardButtonContainer}>
          <button className={`${style.cardButton} ${style.cardButtonProfile}`}>
            <FontAwesomeIcon icon={faUser} className={style.cardIcon} />
            Perfil
          </button>
          <button className={`${style.cardButton} ${style.cardButtonContact}`}>
            <FontAwesomeIcon icon={faCommentDots} className={style.cardIcon} />
            Contacto
          </button>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  character: {
    id: PropTypes.number,
    charName: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    location: PropTypes.string,
    created: PropTypes.string
  }
};

export default Card;
