import React from "react";
import Footer from "../Footer/Footer";
import Button from '@material-ui/core/Button';

import styles from "./Login.module.css";

function Login(){
    return (
        <section>
            <h1>Faca o Login ou registre-se</h1>

            <form className={styles.formLogin}>
                <h2>Login</h2>
                <label for="userLogin" >Email</label>
                <input type="email" name="userLogin" />
                <label for="passwordLogin">Senha</label>
                <input name="passwordLogin" type="password"/>
                <Button variant="contained" color="secondary" type="submit"> Login</Button>
            </form>
            <form className={styles.formLogin}>
                <h2>Registro</h2>
                <label for="userRegister" >Novo Usuário</label>
                <input type="text" name="userRegister" />
                <label for="emailRegister" >Email</label>
                <input type="email" name="emailRegister" />
                <label for="passwordRegister">Senha</label>
                <input name="passwordRegister" type="password"/>
                <Button color="secondary" type="submit">Registrar</Button>
            </form>
            
            <Footer />
        </section>
    );
}

export default Login;