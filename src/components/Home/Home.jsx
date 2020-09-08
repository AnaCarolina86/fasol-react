import React from "react";
import Footer from "../Footer/Footer";

import styles from "./Home.module.css";

function Home(){
    return (
        <div> 
            <section className={styles.home}>
                
                <div className={styles.titles}>
                    <h1 className={styles.title}>FaSol Moda Praia</h1>
                    <h2 className={styles.subtitle}>A Evolução da Moda</h2>
                </div>
                
            </section>
            <Footer />
        </div>
    );
}

export default Home;