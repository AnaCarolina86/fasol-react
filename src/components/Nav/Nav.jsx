import React, { useState } from "react";
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";

function Nav(){        
    const [isOpen, setIsOpen] = useState(false);    

    function handleClick(){
        document.querySelector("#menu").classList.toggle([styles.navOpen]);
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    function handleLink(){
        document.querySelector("#link").classList.remove([styles.navOpen]);
        setIsOpen(false);
    }

    return (
        <section >
            <nav className={styles.nav} id="navSection" style={{transform: isOpen? "translateX(0px)" : "translateX(100%)"}} >
                <ul className={styles.navList}>
                    <li><Link to="/" className={styles.navLink} id= "link" onClick={handleLink} >Página Inicial</Link></li>
                    <li><Link to="historia" className={styles.navLink} id= "link" onClick={handleLink} >Nossa História</Link></li>
                    <li><Link to="bikini" className={styles.navLink} id= "link" onClick={handleLink} >Moda Praia</Link></li>
                    <li><Link to="personalizado" className={styles.navLink} id= "link" onClick={handleLink} >Personalizado</Link></li>
                    <li><Link to="blog" className={styles.navLink} id= "link" onClick={handleLink} >Blog</Link></li>
                    <li><Link to="contact" className={styles.navLink} id= "link" onClick={handleLink} >Contato</Link></li>
                    <li><Link to="login" className={styles.navLink} id= "link" onClick={handleLink} >Login</Link></li>
                </ul>
            </nav>

            <button className={styles.navToggle} aria-label="navigation" onClick={handleClick} id= "menu">
                <span className={styles.hamburger}></span>
            </button>
        </section>
    );
}

export default Nav;