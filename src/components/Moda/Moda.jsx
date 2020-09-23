import React from "react";
import ModaItem from "../ModaItem/ModaItem";
import bikinis from "./bikinis";
import Footer from "../Footer/Footer";

import styles from "./Moda.module.css";

function createCards(bikini){
    return (
        <section >
            <ModaItem 
            key = {bikini.id}
            src = {bikini.src}
            description = {bikini.description}
            size = {bikini.size}
            price = {bikini.price}
            />
        </section>
    )
}

function Moda(){
    return (
        <div>
            <section className={styles.modaSection}>

                <main >
                    <h1 className={styles.modaTitle}>Moda Praia</h1>                    
                    <main className={styles.containerModa}>{bikinis.map(createCards)}</main>
                </main>
                
                <div className={styles.modaTip}>
                    <h2>
                        Quer o seu biquíni feito para você? Clique <span><a href="/">aqui</a></span>.
                    </h2>
                    <h2>
                        Entre em contato com a gente, clique <span><a href="/">aqui</a></span>.
                    </h2>
                </div>
            </section>
            <Footer />
        </div>
        
    );
}

export default Moda;