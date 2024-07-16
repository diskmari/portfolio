import React from 'react';

import styles from "./About.module.css"
import { getImageUrl } from '../../util';

export const About= () => {
  return (
    <section className={styles.container} id='sobre'>
        <h2 className={styles.title}>Sobre</h2>
        <div className={styles.content}>
            <img
             src={getImageUrl("about/aboutImage.png")} alt="Imagem com o laptop"
             className={styles.aboutImage}
             />
             <ul className={styles.aboutItens}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Icone do cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer </h3>
                        <p>Eu sou programadora Front End com experiencia em responsividade e sites otimizados.</p>
                    </div>
                    </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="icon server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer </h3>
                        <p>Eu tenho experiencia em programar back end rapido e otimizado</p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
  )
}
