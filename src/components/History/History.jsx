import React from "react";
import Footer from '../Footer/Footer';

import styles from "./History.module.css";

function History() {
    return (
        <div>
            <section className={styles.historySection}>
                <main className={styles.mainSection}>
                    <h1 className={styles.titleSection}>A Nossa História</h1>

                    <div className={styles.contentHistorySection}>
                        <div className={styles.imageDivHistorySection}>
                            <img className={styles.imageHistorySection} src="./images/fatima.jpeg" alt="fatima soalheiro fasol moda praia" name="fatima"></img>
                            <label for="fatima"><span className={styles.labelHistorySection}><em>Fátima Soalheiro</em></span></label>
                        </div>

                        <article className={styles.textHistorySection}>

                            <h2>
                                A Fasol além de ser uma marca que é feita especialmente para mulheres, é feita por mulheres.
                            </h2>
                            <h2>
                                Fátima, ou melhor, Fatinha como é conhecida por todos, uma mulher linda e sorridente e de muita fé.
                            </h2>
                            <h2>
                                É mãe de 4 filhas que indiretamente influenciou encontrar a paixão pela costura, através delas sentiu a necessidade de fabricar peças íntimas.
                            </h2>
                            <h2>
                                Com o passar dos anos ela descobriu uma nova paixão: A moda praia.
                            </h2>
                            <h2>
                                Fatinha vivia no clube com suas filhas e amou o mar quando viu pela primeira vez, e assim ela juntou suas paixões, o mar, o sol e a costura moda praia.
                            </h2>
                            <h2>
                                Assim nasce a FaSoL uma marca que é feita especialmente para você, para o seu corpo do seu gosto, é a moda praia do seu jeito.
                            </h2>
                        </article>
                    </div>

                </main>
            </section>

            <Footer />
        </div>

    );
}

export default History;