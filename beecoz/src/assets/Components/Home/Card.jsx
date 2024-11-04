import React from 'react';
import { Link } from 'react-router-dom';
import "./Feed.modules.css"

function Card({ title, location, time, description, image, interestedCount }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="location"><i class="ri-map-pin-2-fill"></i> {location}</span>
      <span className="time">{time}</span>
      <p>{description}</p>
      <img src={image} alt="Imagem do projeto" className="card-image" />
      <div className="footer">
        <span><i class="ri-thumb-up-fill"></i>  {interestedCount} interessados</span>
      </div>
    </div>
  );
}

export default Card;
