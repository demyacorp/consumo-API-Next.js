import React from 'react';
import BarraBuscadora from '../Components/BarraBuscadora';
import Cards from '../Components/Cards.js';
import styles from '../styles/index.module.css'

function index() {
  return (
    <>
      <h1 className={styles.title}> Rick and Morty characters</h1>
      <BarraBuscadora />
      <Cards />
      </>
  )
}

export default index