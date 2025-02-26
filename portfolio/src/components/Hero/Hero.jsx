import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../util';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const originalText = 'Olá, Sou a Maria Fernanda';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setDisplayText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        document.getElementById("typing-text").classList.add(styles.hideCursor);
      }
    }, 100); // Intervalo de 100ms entre cada caractere

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span id="typing-text" className={`${styles.typingText} ${styles.hideCursor}`}>{displayText}</span>
        </h1>
        <p className={styles.description}>
        Sou programadora Front-End com dois anos de experiência, estou cursando o primeiro semestre de Sistemas de Infromação na UFU e me formando em Análise de Sistemas.</p>
        <p className={styles.description}>Estou buscando uma oportunidade de trabalho para expandir meu conhecimento e ganhar experiência prática.</p>
        
        <a href="mailto:eumarimonteiro45140@gmail.com" className={styles.contactBtn}>Contato</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Minha foto" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
