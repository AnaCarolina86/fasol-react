import React from "react";
import Footer from "../Footer/Footer";

function Contact(){
    return (
        <div>
        <section>
            <h1>Contato</h1>

            <form>
                <label for="contactName">Nome:</label>
                <input name="contactName" type="text" />

                <label for="contactEmail">Email:</label>
                <input name="contactEmail" type="email" />

                <label for="contactPhone">Telefone:</label>
                <input name="contactPhone" type="text" />

                <label for="contactSubject">Assunto:</label>
                <input name="contacSubject" type="text" />

                <label>Mensagem:</label>
                <textarea></textarea>

                <button type="submit">Enviar</button>
            </form>

            <div>
                <h2>Endereço</h2>
                <h3>Rua Egito, 97 - Copacabana - Belo Horizonte/MG</h3>
            </div>
            <div>
                <h3 class="">E-mail</h3>
                <p><i class="fas fa-at"></i> fasoalheiro@gmail.com</p>
            </div>
            <div>
                <h3>Whatsapp</h3>
                <p><i class="fab fa-whatsapp"></i> (31) 97348-8605</p>
            </div>
            <div>
                <h3>Redes Sociais</h3>
                <a href="https://www.instagram.com/fasol_modapraia/"><i class="fab fa-instagram"></i> Instagram</a><br />
                    <a class="" href="https://www.facebook.com/FaSoalheiro/"><i class="fab fa-facebook"></i> Facebook</a>
            </div>
            
        </section>
        <Footer />
        </div>
    );
}

export default Contact;