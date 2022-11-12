# CADASTRO DE LIVROS E AUTORES

Criação de um sistema Web para cadastro de livros no qual deveriam seguir os critérios de : 1 livro pode ter vários autores e 1 autor pode ter vários livros.

💎 O objetivo principal é a criação dinâmica de cadastros de autor e livros que serão registrados no banco de dados.

🛑 Pré-Requisitos

✅ Conhecer a sintaxe e semântica HTML </br>
✅ Conhecimento básico de CSS </br>
✅ Conhecimento básico de FIGMA </br>
✅ Conhecimento básico de JS(Java Script)  </br>
✅ Conhecimento básico de ReactJs  </br>
✅ Conhecimento básico de MySQL </br>
✅ Conhecimento básico de NodeJS </br>
✅ Git </br>
✅ Conta no GitHub </br>

👣 Passo-a-Passo

Criação de uma interface web simples e prática.

Criação de uma pasta com o reactJS

Criação de banco de dados MySQL

👣 01º Passo: Figma

Para o desenvolvimento de uma interface web é interessante ter auxílio de desenvolvimento visual, para que consiguamos reproduzir o design na tela. 
Com o Design pronto, podemos ter noções de estruturas de HTML e CSS que iremos utilizar para que nosso projeto saia como planejamos.

Link do figma : https://www.figma.com/file/S7sRLL34hlH0w2WqycJZDk/Untitled?node-id=0%3A1&t=37qV6n1TxmQ65b6z-1

👣 02º Passo: ReactJS

Terminal de comando aberto:

    mkdir cadastroLivros
    cd cadastroLivros
    npx create-react-app client 
    cd client 
    cd code .
    
Após iniciar o ReactJS exclui alguns dos arquivos que eu não usaria pra esse projeto, deixando o arquivo organizado em:

📂 Na pasta Client eu deixei os seguintes arquivos:

 📎 Public - Onde fica o html principal
 📎 SRC -
 📎 Components : Geralmente colocamos botões, inputs.. entre outros componentes que podemos separar. A manuntenção fica bem mais fácil :)
      📎Links : Pasta onde está os links de direcionamento para outras pastas, porém decidi não utilizar nesse projeto.
  📎 Pages : Todas as páginas do meu sistema web
      - Home
      - cadastroAutor
      - cadastroLivro
  📎 Styles : Estilo global do meu projeto.
  
  Primeiro eu criei toda a minha interface por meio do ReactJS utilizando styled-Components 💅🏿. 

  Após isso, criei o formulário utilizando o input e será necessário colocar o (name="") que deverá ser escolhido para a inserção do valor no banco de dados. 
  
  👣 03º Passo: MySQL
  
  📂 Na pasta Server eu deixei os seguintes arquivos :

   📎 index.js
   📎 package.json : Para colocar o package.js (npm init -y)
   📎 yarn.lock
   
    Comando : 
    yarn add mysql express cors nodemon.

   Utilizei as bibliotecas e frameworks express, cors e nodemon
   
   👉 Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. Integrar "view engines" para inserir dados nos templates
   👉 O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. 
   👉 O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor. 
   
   Conceitos retirados pelo google 🫰🏼
   
   Criei as tabelas no Workbench com ajuda do Wampp para compartilhar pro local server. 

  Código de teste utilizado : 

      -- Inserindo dados
    INSERT INTO livros ( titulo , data_publi, subtitulo)  VALUES ('Estude ReactJS' , '01/12/2022', 'Aplicações do ReactJS');
    INSERT INTO autor ( nome , data_aniversario, sexo)  VALUES ('Joice' ,'30/09/1999', 'Feminino');
    
    -- Puxando as tabelas
    SELECT * FROM livros;
    SELECT * FROM autor;
    
    -- Inserindo tabela geral
    INSERT INTO livro_has_autor (id_autor, id_livro ) VALUES (id);
    
    -- Puxando tabela geral
    SELECT * FROM livro_has_autor;
    
    -- Puxando com dados extras
    -- Colocando todas as informações em uma mesma tabela
    SELECT * FROM livro_has_autor
    JOIN livros ON livro_has_autor.id_livro = livros.id
    JOIN autor ON livro_has_autor.id_autor = autor.id;
    
    Para conseguirmos linkar esse código em nosso projeto web, iremos precisar do axios.

      yarn add axios
      
    Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quanto no Node. js ou qualquer serviço de API. Neste artigo criaremos um projeto em React que realiza requisições HTTP a API do GitHub usando o Axios.
      - Fonte : DEVMEDIA 🫰
      
     Criamos outra função que irá chamar os valores do nosso INPUT utilizando o useState.

    O useState , que permite a criação de estado no componente através de função e faz o gerenciamento do estado local do componente retorna um array como resultado. Por isso, é possível fazermos uma desestruturação para receber partes desse retorno.
     - Fonte : ALURA 🫰
     
    const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
   
    Criamos então uma função que vai ficar dentro do botão, nessa função utilizamos o axios para justamente fazer esse requerimento de página, que deverá ser igual 
    no index.js que está na pasta server. Os valores precisam ser iguais ao que está na tabela do workBenck!! 

      const handleClickButton = () => {
    Axios.post("http://localhost:3000/list", {
      nome: values.nome,
      data_aniversario: values.data_aniversario,
      sexo: values.sexo,
    }).then((response) => {
      console.log(response);
    });
  };
  
  Fazemos as chamadas no index.js que está na pagina server, e nosso banco de dados estará funcionando!
  
🤝 Contribuindo
Este repositório foi criado para fins de estudo, então contribua com ele. Se te ajudei de alguma forma, ficarei feliz em saber. E caso você conheça alguém que se identidique com o conteúdo, não deixe de compatilhar.

Se possível: ⭐️ Star o projeto 🐛 Encontrar e relatar issues

Disponibilizado com ♥ por Joice.
