import React from "react";

function PersonalizadoForm(){
    return (
        <section>
            <form>
                <label for="personName" >Nome: </label>
                <input name="personName" type="text" />

                <label for="personEmail" >Email: </label>
                <input name="personEmail" type="email"/>

                <label for="personContact" >Contato: </label>
                <input name="personContact" type="text"/>

                <label for="personName" >Nome: </label>
                <input name="personName" type="text" />

                <label for="personUrlModel">Modelo para inspiração:</label>
                <input name="personUrlModel" type="url" placeholder="Colar URL da imagem" />
                <input type="file" name="fileperson" id="file" accept="image/*" 
                    enctype="multipart/form-data" data-multiple-caption="{count} files selected" multiple />
                    <label for="fileperson">Fazer Upload de Imagem</label>

                <div>
                    <img src="/images/simbolo-feminino.png" alt="simbolo feminino" />
                    <h2>Mulher - Medidas</h2>
                </div>

                <label for="personBra">Tamanho do Sutiã:</label>
                <input name="personBra" type="text" />

                <label for="personPanties">Tamanho da Calcinha:</label>
                <input name="personPanties" type="text" />

                <label for="womanHeight">Altura:</label>
                <input name="womanHeight" type="text" />

                <label for="personBusto">Medida do Busto:</label>
                <input name="personBusto" type="text" />

                <label for="personSobBusto">Medida do Sob Busto:</label>
                <input name="personSobBusto" type="text" />

                <label for="personCintura">Medida da Cintura:</label>
                <input name="personCintura" type="text" />

                <label for="womanHip">Medida do Quadril:</label>
                <input name="womanHip" type="text" />

                <p>PARA SABER SEU TAMANHO E COMO TIRAR SUAS MEDIDAS ROLE PARA BAIXO</p>

                <img src="/images/AvatarFeminino.png" alt="mulher medidas bikini" />

                <div>
                    <img src="/images/simbolo-feminino.png" alt="simbolo feminino" />
                    <h2>Mulher - Medidas</h2>
                </div>

                <label for="manHip">Medida do Quadril:</label>
                <input name="manHip" type="text" />

                <label for="personCoxa">Medida da Coxa:</label>
                <input name="personCoxa" type="text" />

                <label for="manCintura">Medida da Cintura:</label>
                <input name="manCintura" type="text" />

                <label for="manHeight">Altura:</label>
                <input name="manHeight" type="text" />

                <p>PARA SABER SEU TAMANHO E COMO TIRAR SUAS MEDIDAS ROLE PARA BAIXO</p>

                <img src="./images/AvatarMasculino.png" alt="homem medidas roupa de banho" />

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default PersonalizadoForm;