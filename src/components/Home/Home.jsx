import React from "react";
import styles from "./Home.module.css";

function Home(){
    return (
        <section className={styles.home}>
            
            <div className={styles.titles}>
                <h1>FaSol Moda Praia</h1>
                <h2>A Evolução da Moda</h2>
            </div>
            
        </section>
    );
}

export default Home;