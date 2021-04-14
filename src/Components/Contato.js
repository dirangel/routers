import React from 'react'
import styles from "./Contato.module.css";
import foto from '../img/contato.jpg'
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>diegorangel.frontend@gmail.com</li>
          <li>4198891-0266</li>
          <li>Rua David Tows, 890 (Xaxim)</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato
