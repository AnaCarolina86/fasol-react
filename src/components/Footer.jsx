import React from "react";
import styles from "./Footer.module.css";

function Footer(){
    return (
        <footer>
            <img className={styles.logoFooter} src="./images/fasol-logo.png" alt="logo fasol moda praia"></img>
            <p>FaSol Moda Praia. 2020</p>

            <div className={styles.icons}>
                <ul>
                    <li>
                        <a className={styles.icon} href="https://www.instagram.com/fasol_modapraia/">
                            <i className= "fab fa-instagram fa-2x" ></i>
                        </a>
                    </li>
                    <li>
                        <a className={styles.icon} href="https://www.facebook.com/FaSoalheiro/">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a className={styles.icon} href="mailto:fasoalheiro@gmail.com">
                            <i className="fas fa-at fa-2x"></i>
                        </a>  
                    </li>
                </ul>
                          
            </div>
        </footer>
    );
}

export default Footer;