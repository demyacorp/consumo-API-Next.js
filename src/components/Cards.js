import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Cards.module.css';

function Cards({ character }) {
  console.log("aqui en cards", character);

  if (character === undefined || character.length === 0) {
    return <p className={styles.notFound}>No hay personajes para mostrar</p>;
  }

  return (
    <div className={styles.container}>
      {character.map((result) => (
        <div key={result.id} className={styles.cards}>
          <Image src={result.image} alt={result.name} width={200} height={200} className={styles.image} />
          <h2>{result.name}</h2>
          <p>{result.species} / {result.gender}</p>
          <span>{result.location.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Cards;