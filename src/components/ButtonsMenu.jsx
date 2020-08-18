import React from "react";
import styles from "./ButtonsMenu.module.css";

function ButtonsMenu(){
    return (
        <section className={styles} >
            <ul>
                <li>
                    <button className={styles.btn}>Página Inicial</button>
                </li>
                <li>
                    <button className={styles.btn}>Nossa História</button>
                </li>
                <li>
                    <button className={styles.btn}>Moda Praia</button>
                </li>
                <li>
                    <button className={styles.btn}>Personalizado</button>
                </li>
                <li>
                    <button className={styles.btn}>Blog</button>
                </li>
                <li>
                    <button className={styles.btn}>Contato</button>
                </li>
            </ul>
        </section>
    );
}

export default ButtonsMenu;