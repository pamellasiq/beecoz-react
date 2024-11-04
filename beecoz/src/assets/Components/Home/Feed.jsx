import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import "./Feed.modules.css"

function Feed() {
  return (
    <div className="feed">
      <Card
       title="Guarda Roupa Planejado"
       location="Santana de Parnaíba"
       time="Há 6 dias"
       description="Projeto de guarda roupa planejado, 40x30 m², na região de Fazendinha. Materiais como madeira, tinta e verniz já comprados."
       image="../../../../public/guarda-roupa.webp"
       interestedCount={10}
      />
      <Card 
      title="Projeto de Cozinha"
      location="São Paulo"
      time="Há 2 dias"
      description="Cozinha planejada com armários e prateleiras modernas. Materiais a serem fornecidos pelo cliente."
      image="../../../../public/cozinhas.jpg"
      interestedCount={5}
      />

    </div>
  );
}

export default Feed;
