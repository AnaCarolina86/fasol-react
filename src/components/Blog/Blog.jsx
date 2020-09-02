import React from "react";
import Footer from "../Footer/Footer";
import paragraphsBlog from "./textBlog";

import styles from "./Blog.module.css";

function Blog(){

    return (
        <div> 
            <section className={styles.blogSection}>

                <article className={styles.textBlog}>
                    <h1 className={styles.titleBlog}>A Evolução do Biquíni na Moda</h1>
                    <h3 className={styles.subtitleBlog}>Por Clara Soalheiro e Lara Soalheiro --- 11/08/2020</h3>
                    
                    
                    <figure>
                        <img src="/images/imagesBlog/louis-bikini.png" alt="Louis designer bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[0].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/coton-bikini.png" alt="Louis designer 1940 bikini" />
                        <img src="/images/imagesBlog/1940-bikini.png" alt="Ano de 1940 bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[1].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/miss-bikini.png" alt="Louis designer 1940 bikini" />
                        <img src="/images/imagesBlog/modelo-1950-bikini.png" alt="modelo 1950 fasol bikini florido" />
                        <img src="/images/imagesBlog/1950-bikini.png" alt="Ano de 1950 fasol bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[2].paragraph}</h3>
                    </article>

                    <article>
                        <h3>{paragraphsBlog[3].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/esther-bikini.png" alt="Louis designer 1960 bikini" />
                        <img src="/images/imagesBlog/brigitte-bikini.png" alt="modelo 1960 fasol bikini florido" />
                        <img src="/images/imagesBlog/1960-bikini.png" alt="Ano de 1960 fasol bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[4].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/leila-bikini.png" alt="Leila Dinis usando bikini 1970" />
                        <img src="/images/imagesBlog/1970-bikini.png" alt="Ano de 1970 fasol bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[5].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/asadelta-bikini.png" alt="Modelos 1980 bikini" />
                        <img src="/images/imagesBlog/galisteu-bikini.png" alt="modelo Adriane Galisteu bikini 1980" />
                        <img src="/images/imagesBlog/1980-bikini.png" alt="Ano de 1980 fasol bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[6].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/black-bikini.png" alt="Modelo bikini preto 1990" />
                        <img src="/images/imagesBlog/colorful-bikini.png" alt="bikinis coloridos 1990" />
                        <img src="/images/imagesBlog/1990-bikini.png" alt="Ano de 1990 fasol bikini" />
                    </figure>
                    
                    <article>
                        <h3>{paragraphsBlog[7].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/sunga1.png" alt="Modelo usando sunga colorida 2000 bikini" />
                        <img src="/images/imagesBlog/sunga2.png" alt="Modelo usando sunga colorida 2000 bikini" />
                        <img src="/images/imagesBlog/2000-bikini.png" alt="Ano de 2000 fasol bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[8].paragraph}</h3>
                    </article>

                    <figure>
                        <img src="/images/imagesBlog/strappyModels-bikini.png" alt="Modelos usando bikinis strappy 3D coloridos 2010" />
                        <img src="/images/imagesBlog/blackStrappy-bikini.png" alt="Modelo usando bikini strappy preto 2010" />
                        <img src="/images/imagesBlog/2010-bikini.png" alt="Ano de 2010 fasol bikini" />
                    </figure>

                    <article>
                        <h3>{paragraphsBlog[9].paragraph}</h3>
                    </article>

                    <article>
                        <h3>{paragraphsBlog[10].paragraph}</h3>
                    </article>
                </article>

                <article className={styles.bibliografia}>
                    <h3>Bibliografia:</h3>
                    
                    <ul className={styles.bibliografia}>
                        <li>
                            <a href="https://www.taofeminino.com.br/estilo/a-evolucao-do-biquini-s1989423.html#:~:text=A%20evolu%C3%A7%C3%A3o%20dos%20biqu%C3%ADnis%20nos%20%C3%BAltimos%2070%20anos&text=O%20primeiro%20biqu%C3%ADni%20foi%20desenhado,%2C%20claro%2C%20conforto%20das%20pe%C3%A7as.">
                            A evolução dos biquínis nos últimos 70 anos</a>
                        </li>
                        <li>
                            <a href="https://www.newyou.com/featured/the-evolution-of-the-itsy-bitsy-bikini/">THE EVOLUTION OF THE ITSY BITSY BIKINI</a>
                        </li>
                        <li>
                            <a href="https://www.modices.com.br/moda/um-pouco-sobre-historia-biquini-brasil/">A história do biquíni no Brasil desde 1950</a>
                        </li>
                        <li>
                            <a href="https://catracalivre.com.br/cidadania/leila-diniz-jovem-que-contestou-o-machismo-nos-anos-60/">
                                Leila Diniz, a jovem que contestou o machismo nos anos 60</a> 
                        </li>
                        <li>
                            <a href="https://www.aberbeach.com.br/blog/historia-da-sunga-de-praia/">
                                História da Sunga de Praia. Evolução das Roupas de Banho Masculinas</a>
                        </li>
                        <li>
                            <a href="https://pt.wikipedia.org/wiki/Sunga">Sunga - Wikipédia</a>
                        </li>
                    </ul>
                    
                </article>
                
            </section>
            <Footer />
        </div>
    );
}

export default Blog;