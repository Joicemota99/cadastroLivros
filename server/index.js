const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registros_biblioteca",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { titulo } = req.body;
  const { data_publi } = req.body;
  const { subtitulo } = req.body;

  let SQL =
    "INSERT INTO livros (titulo , data_publi, subtitulo)  VALUES (? ,?, ?)";

  db.query(SQL, [titulo, data_publi, subtitulo], (err, result) => {
    console.log(err);
  });
});

app.post("/list", (req, res) => {
  const { nome } = req.body;
  const { data_aniversario } = req.body;
  const { sexo } = req.body;

  let SQL2 =
    "INSERT INTO autor ( nome , data_aniversario, sexo)  VALUES (? ,?, ?)";

  db.query(SQL2, [nome, data_aniversario, sexo], (err, result) => {
    console.log(err);
  });
});

app.get("/getCards", (req, res) => {
  let SQL_Livro_Autor = `SELECT livro_has_autor.id_livro, livro_has_autor.id_autor,
  livro.titulo,livro.data_publi,livro.subtitulo,
  autor.nome, autor.data_aniversario, autor.sexo	
  FROM livro_has_autor
  JOIN livros ON livro_has_autor.id_livro = livros.id
  JOIN autor ON livro_has_autor.id_autor = autor.id;`;

  db.query(SQL_Livro_Autor, (err, result) => {
    console.log(err);
  });
});

app.listen(3000, () => {
  console.log("Rodando servidor");
});
