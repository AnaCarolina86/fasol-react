import React, { useState } from "react";
import styles from "./Nav.module.css";

function Nav(){        
    const [isOpen, setIsOpen] = useState(false);    

    function handleClick(){
        document.querySelector("#menu").classList.toggle([styles.navOpen]);
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    function handleLink(){
        document.querySelectorAll("#link").classList.remove([styles.navOpen]);
        setIsOpen(false);
    }

    return (
        <section >
            <nav className={styles.nav} id="navSection" style={{transform: isOpen? "translateX(0px)" : "translateX(100%)"}} >
                <ul className={styles.navList}>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Página Inicial</a></li>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Nossa História</a></li>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Moda Praia</a></li>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Personalizado</a></li>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Blog</a></li>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Contato</a></li>
                    <li><a href="/" className={styles.navLink} id= "link" onClick={handleLink} >Login</a></li>
                </ul>
            </nav>

            <button className={styles.navToggle} aria-label="navigation" onClick={handleClick} id= "menu">
                <span className={styles.hamburger}></span>
            </button>
        </section>
    );
}

export default Nav;