import "./App.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import '@fontsource/roboto'

function App() {
  
  const login = ()=>{
    const Email = document.querySelector("#Email") as HTMLInputElement
    const Password = document.querySelector("#Password") as HTMLInputElement

    if(localStorage.getItem('Email') == Email.value && localStorage.getItem('Password') == Password.value){
      alert('Sucesso' + '\n' + 'Em breve você será redirecionado ao painel de controle')
      setTimeout(()=>{
        window.location.href='painel'
      },1000)
    }else{
      alert("Login ou senha incorretos")
    }

  }

  return (

    <>
      <Box className="box" component="form"
        sx={{
          textAlign: "center",
          padding: "1rem",
          maxWidth: 400,
        }}
      >

        <Container className="box__containerText">
          <h1>Login</h1>
          <p>Novo no site ? <a href="/CreateAccount">Registre-se</a>
          </p>
        </Container>

        <Container className="box__containerInput">
          <TextField variant="outlined" label="Email" name="Email" id="Email" sx={{ width: "100%", margin: "10px 0" }}/>
          <TextField variant="outlined" label="Senha" type="password" id="Password" sx={{ width: "100%" }} />
          <a href="#">Esqueceu a senha ?</a>

        </Container>
        <Container className="box__containerButton">
          <Button variant="contained" sx={{ width: "100%" }} onClick={login}>
            Login
          </Button>
        </Container>
        <Container className='box_containerIcons'>
          <hr />
          <p>ou</p>
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width='40px' height='40px'/>
          <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" width='40px' height='40px' />
        </Container>
      </Box>
    </>
  );
}

export default App;
