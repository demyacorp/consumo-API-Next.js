import React, { useEffect, useState } from 'react';
import styles from '../styles/BarraBuscadora.module.css';
import Image from 'next/image';
import Cards from './Cards.js';


function BarraBuscadora() {

  const [searchText, setSearchText] = useState('');
  const [filteredCharacter, setFilteredCharacter] = useState([]);
  const [character, setCharacter] = useState([]);

  console.log("1. character" , character);
  console.log("1. FilteredCharacter" , filteredCharacter);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await response.json();
        setCharacter(data.results);
        console.log("2. data", character);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchCharacter();
  }, []);



  useEffect(() => {
    if (!searchText) {
      setFilteredCharacter(character);
      console.log("2. filtered", filteredCharacter);
    } else {
      // Si hay texto de búsqueda, filtramos las tarjetas
      const searchTerms = searchText.split(" ");
      const matches = character.filter((char) => {
        const properties = `${char.name} ${char.species} ${char.gender} ${char.location.name} `;
        const combinedProperties = properties.toLowerCase();
        return searchTerms.every((term) => combinedProperties.includes(term));
      });
      setFilteredCharacter(matches);
    }
  }, [searchText, character]);

  const searchCharacter = (text) => {
    setSearchText(text);
  };
  console.log("3. console final character" , character);
  console.log("3. console final filtered" , filteredCharacter);


  return (
    <div>
      <div className={styles.search}>
        <div className={styles.Image}>
          <Image src={require('../image/Search.png')} width={26} height={27} alt='Search image' />
        </div>
        <input
          type='text'
          className={styles.box}
          placeholder='Ingresa el texto a buscar'
          value={searchText}
          onChange={(e) => searchCharacter(e.target.value)}
        />
      </div>
      {character.length > 0 && <Cards character={filteredCharacter} />}
    </div>
    
  );
}

export default BarraBuscadora;