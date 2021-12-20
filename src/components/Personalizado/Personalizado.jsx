import React from "react";
import PersonalizadoForm from "../PersonnalizadoForm/PersonalizadoForm";
import Footer from "../Footer/Footer";

import styles from "./Personalizado.module.css";

function Personalizado() {
    return (
        <div>
            <section className={styles.personSection}>
                <div className={styles.titlesPerson}>
                    <h2 className={styles.diverseTitlePerson}>Somos diversos! O nosso corpo e gosto é único!</h2>
                    <h2 className={styles.subtitlePerson}>É pensando nisso que personalizamos a moda praia do seu jeito, com suas medidas, com o modelo que deseja, cor e estampa.
                        Preencha seus dados abaixo e faça o seu orçamento: </h2>
                </div>

                <h1 className={styles.titleFormPerson}>Formulário</h1>

                <PersonalizadoForm />

                <section>
                    <h2 className={styles.titleHowPerson}>MULHER - COMO TIRAR SUAS MEDIDAS</h2>
                    <div className={styles.imagesHowPerson}>
                        <img className={styles.imageHowPerson} src="./images/tabela-medidas-feminino1.png" alt="table that shows how to take feminine body mesuares bikini" />
                        <img className={styles.imageHowPerson} src="./images/tabela-medidas-feminino2.png" alt="table that shows how to take feminine body mesuares bikini" />
                    </div>

                    <h2 className={styles.titleHowPerson} >HOMEM - COMO TIRAR SUAS MEDIDAS</h2>
                    <div className={styles.imagesHowPerson}>
                        <img className={styles.imageHowPerson} src="./images/tabela-medidas-masculino.png" alt="able that shows how to take masculine body mesuares roupa de banho" />
                    </div>

                </section>
            </section>
            <Footer />
        </div>

    );
}

export default Personalizado;