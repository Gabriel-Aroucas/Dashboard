import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

const createAccount = () => {
  return (
    <Box className="box" component="form"
      sx={{
        textAlign: "center",
        padding: "1rem",
        maxWidth: 400,
        maxHeight:'100vh',
      }}
    >
      <Container className="box__containerText">
        <h1>Registre-se</h1>
        <p>Já tem uma conta ? <a href="/">Login</a>
        </p>
      </Container>

      <Container className="box__containerInput">
        <TextField variant="outlined" label="Nome" name='Name' sx={{ width: "100%", margin: "10px 0" }}/>
        <TextField variant="outlined" label="Sobrenome" name='Sobrenome' sx={{ width: "100%", margin: "10px 0" }}/>
        <TextField variant="outlined" label="Email" name='Email' sx={{ width: "100%", margin: "10px 0" }}/>
        <TextField variant="outlined" label="Senha" name='password' type='password' sx={{ width: "100%", margin: "10px 0" }}/>
        <TextField variant="outlined" label="Confirmar Senha" type='password' sx={{ width: "100%" }} />
        <TextField variant="outlined" label="Frase Secreta" name='Email' sx={{ width: "100%", margin: "10px 0" }}/>

      </Container>
      <Container className="box__containerButton">
        <Button variant="contained" sx={{ width: "100%" }}>
          Registrar
        </Button>
      </Container>
      <Container className='box_containerIcons'>
        <hr />
        <p>ou</p>
        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width='40px' height='40px'/>
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" width='40px' height='40px' />
      </Container>
    </Box>
  )
}

export default createAccount