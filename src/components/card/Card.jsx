import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faCommentDots,
  faPerson,
  faVenus,
  faMars,
  faLocationDot,
  faCalendar
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
  faCalendar
);

const Card = ({
  charName,
  status,
  species,
  gender,
  location,
  created,
  image
}) => {
  return (
    <div className={style.card}>
      <div className={style.cardWrapper}>
        <div className={style.cardHeader}>
          <img className={style.cardAvatar} src={image} alt="avatar" />
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
          <FontAwesomeIcon icon={faPerson} className={style.cardIconBlue} />
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
          {created}
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
  charName: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  created: PropTypes.string,
  image: PropTypes.string
};

export default Card;
