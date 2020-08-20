import React from "react";
import Nav from "../Nav/Nav";
import ButtonsMenu from "../Buttons/ButtonsMenu";

import styles from "./Header.module.css";

function Header(){
    return (
        <header>
            <img className={styles.logo} src="./images/fasol-logo.png" alt="logo brand fasol moda praia" />
            <Nav />
            <ButtonsMenu />
        </header>
    );

}

export default Header;