import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState("login")

  const mudarTela = (novaTela) =>{
    setTela(novaTela)
  }

  const renderizarTela = () => {
    if (tela === "login") {
      return <TelaLogin mudarTela={mudarTela} />;
    } else if (tela === "cadastro") {
      return <TelaCadastro mudarTela={mudarTela} />;
    } else if (tela === "principal") {
      return <TelaPrincipal mudarTela={mudarTela} />;
    } else {
      return <p>TELA NÃO ENCONTRADA</p>;
    }
  };

  return (
    <MainContainer >
      <GlobalStyled />

      {renderizarTela()}
      
      
    </MainContainer>
  );
}

export default App;