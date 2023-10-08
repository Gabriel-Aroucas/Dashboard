import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

const createAccount = () => {
  const storageAccount = () => {
    document.addEventListener("submit", (e) => e.preventDefault());

    const Name = document.querySelector("#Name") as HTMLInputElement;
    const Lastname = document.querySelector("#Lastname") as HTMLInputElement;
    const Email = document.querySelector("#Email") as HTMLInputElement;
    const Password = document.querySelector("#Password") as HTMLInputElement;
    const Secret = document.querySelector("#Secret") as HTMLInputElement;

    if (
      Name.value.length > 0 &&
      Lastname.value.length > 0 &&
      Email.value.length > 0 &&
      Password.value.length > 0 &&
      Secret.value.length > 0
    ) {
      localStorage.setItem("Name", Name.value);
      localStorage.setItem("Lastname", Lastname.value);
      localStorage.setItem("Email", Email.value);
      localStorage.setItem("Password", Password.value);
      localStorage.setItem("Secret", Secret.value);
      
    }
  };

  return (
    <FormControl id='formControl'>
      <Box
        className="box"
        component="form"
        sx={{
          textAlign: "center",
          padding: "1rem",
          maxWidth: 400,
          maxHeight: "100vh",
        }}
      >
        <Container className="box__containerText">
          <h1>Registre-se</h1>
          <p>
            Já tem uma conta ? <a href="/">Login</a>
          </p>
        </Container>

        <Container className="box__containerInput">
          <TextField
            variant="outlined"
            label="Nome"
            name="Name"
            id="Name"
            sx={{ width: "100%", margin: "10px 0" }}
            required
          />
          <TextField
            variant="outlined"
            label="Sobrenome"
            name="Lastname"
            id="Lastname"
            sx={{ width: "100%", margin: "10px 0" }}
            required
          />
          <TextField
            variant="outlined"
            label="Email"
            name="Email"
            id="Email"
            sx={{ width: "100%", margin: "10px 0" }}
            required
          />
          <TextField
            variant="outlined"
            label="Senha"
            name="Password"
            type="password"
            id="Password"
            sx={{ width: "100%", margin: "10px 0" }}
            required
          />
          <TextField
            variant="outlined"
            label="Confirmar Senha"
            type="password"
            sx={{ width: "100%" }}
            id="confirmPassword"
            required
          />
          <TextField
            variant="outlined"
            label="Frase Secreta"
            name="Secret"
            id="Secret"
            sx={{ width: "100%", margin: "10px 0" }}
            required
          />
        </Container>
        <Container className="box__containerButton">
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "100%" }}
            onClick={storageAccount}
          >
            Registrar
          </Button>
        </Container>
        <Container className="box_containerIcons">
          <hr />
          <p>ou</p>
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            width="40px"
            height="40px"
          />
          <img
            src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
            width="40px"
            height="40px"
          />
        </Container>
      </Box>

    </FormControl>
  );
};

export default createAccount;
