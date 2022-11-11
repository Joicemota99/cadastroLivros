import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0 auto;
        padding: 0;
    }

    body{
        background-color: #ffffff;
    }
    #escolha{
        width: 200px;
        height: 40px;
        border:none;
        font-family:"Inter";
        color: #000000;
        text-align:center;
        font-size: 18px;
        cursor:pointer;
        background-color: #D9D9D9;
        border-radius: 25px;
    }

    .acrescentar{
        font-family: "Inter";
        border: none;
        background-color:#000000;
        padding: 1%;
        color: #ffffff;
        border-radius: 12px;
        cursor: pointer;
    }
    .enviar{
        font-family: "Inter";
        border: none;
        background-color:#000000;
        padding: 1%;
        color: #ffffff;
        border-radius: 12px;
        cursor: pointer;
        margin-top:1%;
       display:flex;
    }

    .livro{
        font-family: "Inter";
     

    }

    .registro{
        display:flex;
        flex-direction: row;
        padding:1%;
        width: 50%;
        border: none;
        background-color: #000000;
        color: #ffffff;
        margin: 0 auto;
        
    }

    .autores{
        font-family: "Inter";
    }
    .cadastro{
        padding: 5%;
        margin-bottom: 5%;
    }

    .pesquisar{
        margin-left:5%;
        margin-top:5%;
        padding: 1%;
    }
    .btnPesquisar{
        margin-left: 2%;
        border: none;
        padding: 1%;
        font-family: "Inter";
        border-radius: 20px;
    }
`;
