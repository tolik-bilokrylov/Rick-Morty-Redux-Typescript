import React from 'react';
import { CharacterModalType } from '../../types';

export const CharacterModal: React.FC<CharacterModalType> = ({ modalActive, setModalActive, character }) => {
  const { name, image, status, species, type, gender, location } = character;

  return (
    <div
      className={modalActive ? "character__modal character__modal--active" : "character__modal"}
      onClick={() => setModalActive(false)}
    >
      <div
        className={modalActive ? "character__content character__content--active" : "character__content"}
        onClick={element => element.stopPropagation()}
      >
        <img src={image} alt="character" />
        <h1 className="character__tittle">{name}</h1>
        <p className={status === "Alive" ? "character__full character__full--norm" : "character__full character__full--bad"}>
          Status:&nbsp;
          {status}
        </p>
        <p className="character__full">
          Species:&nbsp;
          {species}
        </p>
        <p className="character__full">
          {type}
        </p>
        <p className="character__full">
          Gender:&nbsp;
          {gender}
        </p>
        <p className="character__full">
          Location:&nbsp;
          {location.name}
        </p>
      </div>
    </div>
  )
};