import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const cadastrar = () => {
    // validação de cadastro ainda será visto mais pra frente no curso
    props.mudarTela("Principal")
  }

  const mostrarTelaLogin = () => {
    //alert("Faça a prática 2 e remova esse alerta")
    props.mudarTela("login")
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>

        <SendButton onClick={cadastrar}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
