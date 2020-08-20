import React from "react";
import ModaItem from "../ModaItem/ModaItem";
import Footer from "../Footer/Footer";

function Moda(){
    return (
        <div>
            <section>
            <h1>Moda Praia</h1>
            <ModaItem />
            <div>
                <h3>
                    Quer o seu biquíni feito para você? Clique <span><a href="/">aqui</a></span>.
                </h3>
                <h3>
                    Entre em contato com a gente, clique <span><a href="/">aqui</a></span>.
                </h3>
            </div>
            </section>
            <Footer />
        </div>
        
    );
}

export default Moda;