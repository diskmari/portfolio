import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../util'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Sou a Maria Fernanda</h1>
        <p className={styles.description}>
          Estou no quarto semestre de Análise e Desenvolvimento de Sistemas e sou programadora Front-End.
        </p>
        <a href="mailto:eumarimonteiro45140@gmail.com" className={styles.contactBtn}>Contato</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Minha foto" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
