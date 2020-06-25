import React from 'react';
import Details from './Details';
import Picture from './Picture';
import './Card.css';

const Card = ({ id }) => {
  return (
    <div className="Card">
      <Picture id={id} />
      <Details id={id} />
    </div>
  );
};

export default Card;
