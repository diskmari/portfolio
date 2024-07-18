import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../util"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
  <nav className={styles.navbar}>
    <a className={styles.title}href="/">
    Portfolio
    </a>
    <div className={styles.menu}>
        <img className={styles.menuBtn}
        src={
            menuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
        } 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)} //mudar o icon
        />
        <ul
            className={`${styles.menuItens} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(!false)}
        >
            <li>
                <a href="#sobre">Sobre</a>
            </li>
            <li>
                <a href="#experiências">Experiências</a>
            </li>
            <li>
                <a href="#project">Projetos</a>
            </li>
            <li>
                <a href="#contato">Contato</a>
            </li>
        </ul>
    </div>
  </nav>
  )
}
