import {
  Menu,
  LinkMenu,
  ContainerLink,
  Name,
  Titulo,
  Container,
  Cadastro,
} from "../cadastroLivro/index";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";

const Livro = () => {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3000/register", {
      titulo: values.titulo,
      data_publi: values.data_publi,
      subtitulo: values.subtitulo,
    }).then((response) => {
      console.log(response);

      Axios.post("http://localhost:3000/register2", {
        id_livro: values.id_livro,
        id_autor: values.id_autor,
      });
    });
  };

  return (
    <>
      <Menu>
        <LinkMenu>
          <ContainerLink>
            <Link to="/">
              <Name>HOME</Name>
            </Link>
          </ContainerLink>
          <ContainerLink>
            <Link to="/pesquisar">
              <Name>PESQUISAR</Name>
            </Link>
          </ContainerLink>
          <ContainerLink>
            <Link to="/cadastroLivro">
              <Name>CADASTRAR LIVROS</Name>
            </Link>
          </ContainerLink>
          <ContainerLink>
            <Link to="/cadastroAutor">
              <Name>CADASTRAR AUTOR</Name>
            </Link>
          </ContainerLink>
          <ContainerLink>
            <Link to="/todosLivros">
              <Name>ACERVO</Name>
            </Link>
          </ContainerLink>
        </LinkMenu>
      </Menu>
      <Cadastro>
        <Titulo>CADASTRAR LIVROS</Titulo>
        <Container>
          <form className="livro">
            <label>*Titulo do Livro</label>
            <input
              type="text"
              name="titulo"
              placeholder="Insira o titulo do livro"
              className="registro"
              onChange={handleChangeValues}
            />
            <label>*Data de publicação</label>
            <input
              type="text"
              name="data_publi"
              placeholder="Insira a data de publicação"
              className="registro"
              onChange={handleChangeValues}
            />
            <label>*Subtitulo</label>
            <input
              type="text"
              name="subtitulo"
              placeholder="Insira o titulo do livro"
              className="registro"
              onChange={handleChangeValues}
            />
            <button className="enviar" onClick={handleClickButton}>
              Enviar
            </button>
          </form>
        </Container>
      </Cadastro>
    </>
  );
};

export { Livro };
