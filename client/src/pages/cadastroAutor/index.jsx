import {
  Menu,
  LinkMenu,
  Name,
  Titulo,
  Container,
  Cadastro,
} from "../cadastroLivro/index.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";

const Autor = () => {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3000/list", {
      nome: values.nome,
      data_aniversario: values.data_aniversario,
      sexo: values.sexo,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <Menu>
        <LinkMenu>
          <Link to="/">
            <Name>HOME</Name>
          </Link>
          <Link to="/pesquisar">
            <Name>PESQUISAR</Name>
          </Link>
          <Link to="/cadastroLivro">
            <Name>CADASTRAR LIVROS</Name>
          </Link>
          <Link to="/cadastroAutor">
            <Name>CADASTRAR AUTOR</Name>
          </Link>
          <Link to="/todosLivros">
            <Name>ACERVO</Name>
          </Link>
        </LinkMenu>
      </Menu>
      <Cadastro>
        <Titulo>CADASTRAR AUTORES</Titulo>
        <Container>
          <form className="autores">
            <label>*Código do Autor</label>
            <input
              type="text"
              name="id_autor"
              placeholder="Digite o numero do código do Autor"
              className="registro"
              onChange={handleChangeValues}
            />
            <label>*Código do Livro</label>
            <input
              type="text"
              name="id_livro"
              placeholder="Escolha o código do livro"
              className="registro"
              onChange={handleChangeValues}
            />
            <label>*Nome do Autor</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome do Autor"
              className="registro"
              onChange={handleChangeValues}
            />
            <label>*Data daniversário</label>
            <input
              type="text"
              name="data_aniversario"
              placeholder="Insira a data de aniversario"
              className="registro"
              onChange={handleChangeValues}
            />
            <label>*sexo</label>
            <input
              type="text"
              name="sexo"
              placeholder="Insira o sexo"
              className="registro"
              onChange={handleChangeValues}
            />

            <button className="enviar" onClick={() => handleClickButton()}>
              Enviar
            </button>
          </form>
        </Container>
      </Cadastro>
    </>
  );
};

export { Autor };
