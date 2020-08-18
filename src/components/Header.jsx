import React from "react";
import ButtonsMenu from "./ButtonsMenu";

import styles from "./Header.module.css";

function Header(){
    return (
        <header>
            <img className={styles.logo} src="./images/fasol-logo.png" alt="logo brand fasol moda praia" />
            <ButtonsMenu />
        </header>
    );

}

export default Header;