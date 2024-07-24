import React from 'react';

import styles from "./About.module.css"
import { getImageUrl } from '../../util';

export const About= () => {
  return (
    <section className={styles.container} id='sobre'>
        <h2 className={styles.title}>Sobre</h2>
        <div className={styles.content}>
            <img
             src={getImageUrl("about/frieren.png")} alt="Imagem com o laptop"
             className={styles.aboutImage}
             />
             <ul className={styles.aboutItens}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Icone do cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer </h3>
                        <p>Estou aprendendo a criar interfaces web responsivas e otimizadas, proporcionando uma experiência de usuário excepcional. Atualmente, estou aprofundando meus conhecimentos em Next.js e React, visando desenvolver aplicações web modernas e eficientes.</p>
                    </div>
                    </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="icon server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer </h3>
                        <p>Dedico-me a construir soluções robustas e escaláveis, garantindo performance e otimização dos sistemas. Meu foco atual está em aprimorar minhas habilidades em lógica de programação utilizando JavaScript e C++.</p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
  )
}
