import React from "react";
import { useState } from "react";
import styles from "./PersonalizadoForm.module.css";

function PersonalizadoForm() {
    const [email, setEmail] = useState("");

    return (
        <section>
            <form action={`mailto:fasoalheiro@gmail.com&subject=Bikiqui%Personalizado&body=${email}`}>
                <section className={styles.sectionFormInput}>
                    <label for="personName" >Nome: </label>
                    <input name="personName" type="text" required />
                </section>

                <section className={styles.sectionFormInput}>
                    <label for="personEmail" >Email: </label>
                    <input name="personEmail" type="email" required />
                </section>

                <section className={styles.sectionFormInput}>
                    <label for="personContact" >Telefone: </label>
                    <input name="personContact" type="phone" required />
                </section>


                <section className={styles.sectionFormInput}>
                    <label for="personUrlModel">Modelo para inspiração:</label>
                    <input name="personUrlModel" type="url" placeholder="URL da imagem" />
                </section>

                {/* <input type="file" name="fileperson" id="file" accept="image/*"
                    enctype="multipart/form-data" data-multiple-caption="{count} files selected" multiple />
                <label for="fileperson">Fazer Upload de Imagem</label> */}

                <header className={styles.sectionFormSubHeader}>
                    <img src="/images/simbolo-feminino.png" alt="simbolo feminino" />
                    <h2>Mulher - Medidas</h2>
                </header>

                <section className={styles.sectionInputsPerson}>
                    <div>
                        <section className={styles.sectionFormInput}>
                            <label for="personBra">Tamanho do Sutiã:</label>
                            <input name="personBra" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="personPanties">Tamanho da Calcinha:</label>
                            <input name="personPanties" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="womanHeight">Altura:</label>
                            <input name="womanHeight" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="personBusto">Medida do Busto:</label>
                            <input name="personBusto" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="personSobBusto">Medida do Sob Busto:</label>
                            <input name="personSobBusto" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="personCintura">Medida da Cintura:</label>
                            <input name="personCintura" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="womanHip">Medida do Quadril:</label>
                            <input name="womanHip" type="text" />
                        </section>
                    </div>
                    <picture>
                        <img src="/images/AvatarFeminino.png" alt="mulher medidas bikini" />
                    </picture>
                </section>


                <header className={styles.sectionFormSubHeader}>
                    <img src="/images/simbolo-masculino.png" alt="simbolo masculino" />
                    <h2>Homens - Medidas</h2>
                </header>

                <section className={styles.sectionInputsPerson}>
                    <div>
                        <section className={styles.sectionFormInput}>
                            <label for="manHip">Medida do Quadril:</label>
                            <input name="manHip" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="personCoxa">Medida da Coxa:</label>
                            <input name="personCoxa" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="manCintura">Medida da Cintura:</label>
                            <input name="manCintura" type="text" />
                        </section>
                        <section className={styles.sectionFormInput}>
                            <label for="manHeight">Altura:</label>
                            <input name="manHeight" type="text" />
                        </section>
                    </div>
                    <picture>
                        <img src="./images/AvatarMasculino.png" alt="homem medidas roupa de banho" />
                    </picture>
                </section>

                <button className={styles.btn} type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default PersonalizadoForm;