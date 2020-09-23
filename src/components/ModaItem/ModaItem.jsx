import React from "react";
import styles from "./ModaItem.module.css";

function ModaItem(props){

    return (
        <section className={styles.bikiniCard}>            
            <img className={styles.bikiniItem} src={props.src} alt="bikinis fasol moda praia" />
            <div className={styles.bikiniDescrip}>
                <h3>{props.description}</h3>
                <h3>{props.size}</h3>
                <h3>{props.price}</h3>
            </div>
        </section>
    );
}

export default ModaItem;