import React from "react";
import PersonalizadoForm from "../PersonnalizadoForm/PersonalizadoForm";

function Personalizado(){
    return (
        <section>
            <div>
                <h2>Somos diversos! O nosso corpo e gosto é único!</h2>
                <h2>É pensando nisso que personalizamos a moda praia do seu jeito, com suas medidas, com o modelo que deseja, cor e estampa. 
                    Preencha seus dados abaixo e faça o seu orçamento:
                </h2>
            </div>

            <h1>Formulário</h1>

            <PersonalizadoForm />

            <section>
                <h3>MULHER - COMO TIRAR SUAS MEDIDAS</h3>
                <img src="./images/tabela-medidas-feminino1.png" alt="table that shows how to take feminine body mesuares bikini" />
                <img src="./images/tabela-medidas-feminino2.png" alt="table that shows how to take feminine body mesuares bikini" />

                <h3>HOMEM - COMO TIRAR SUAS MEDIDAS</h3>
                <img src="./images/tabela-medidas-masculino.png" alt="able that shows how to take masculine body mesuares roupa de banho" />
            </section>
        </section>
    );
}

export default Personalizado;