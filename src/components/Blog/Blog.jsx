import React from "react";
import Footer from "../Footer/Footer";


function Blog(){
    return (
        <div> 
            <section>
                <img src="./images/imagem-blog.png" alt="imagem com varias mulheres usando diferentes tipos de biquini, representando 
                    a evolucao dos biquinis" />
                <h1>Verão 2020</h1>
                <h2>Tendências para este ano</h2>
                <article>
                A moda praia sempre acompanha o que está em alta nas passarelas. 
                E este ano, não foi diferente. O uso de logos continua presente em várias coleções de designers.
                </article>
            </section>
            <Footer />
        </div>
    );
}

export default Blog;