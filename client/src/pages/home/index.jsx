import { ContainerHome, TituloHome, TituloForm } from "./index";
import { Button } from "../../components/Button/index.jsx";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState("Autor");

  const handleClickSignIn = () => {
    if ("Autor" === select) {
      navigate("/cadastroAutor");
    } else if ("Livro" === select) {
      navigate("/cadastroLivro");
    }
  };

  return (
    <>
      <ContainerHome>
        <TituloHome>SEJA BEM VINDO!</TituloHome>
        <TituloForm>GOSTARIA DE CADASTRAR QUAL PRIMEIRO?</TituloForm>

        <form className="escolha">
          <select
            id="escolha"
            name="escolha"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="Autor">Autor</option>
            <option value="Livro">Livro</option>
          </select>
        </form>

        <Button title="CADASTRAR" id="result" onClick={handleClickSignIn} />
      </ContainerHome>
    </>
  );
};

export { Home };
