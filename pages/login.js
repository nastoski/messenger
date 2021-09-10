import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://www.searchpng.com/wp-content/uploads/2019/03/Messenger-Icon-PNG-715x715.png" />
        <Button onClick={signIn} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  background-color: whitesmoke;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  border-radius: 5%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
