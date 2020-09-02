import React from "react";
import styles from "./ButtonsMenu.module.css";
import {Link} from "react-router-dom";

function ButtonsMenu(){
    return (
        <section className={styles}>
            <ul className={styles.listBtn}>
                <li>
                    <Link to="/"><button className={styles.btn}>Página Inicial</button></Link>
                </li>
                <li>
                    <Link to="history"><button className={styles.btn}>Nossa História</button></Link> 
                </li>
                <li>
                    <Link to="bikini"><button className={styles.btn}>Moda Praia</button></Link>
                </li>
                <li>
                    <Link to="personalizado"><button className={styles.btn}>Personalizado</button></Link>
                </li>
                <li>
                    <Link to="blog"><button className={styles.btn}>Blog</button></Link>
                </li>
                <li>
                    <Link to="contact"><button className={styles.btn}>Contato</button></Link>
                </li>
            </ul>
        </section>
    );
}

export default ButtonsMenu;