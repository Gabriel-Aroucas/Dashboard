import { Anchor, ManageSearch, Send, Home,PersonAdd,PostAdd,Help } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import "./Dashboard.css";

const Dashboard = () => {

    
  return (
    <section className="Dashboard">
      <div className="Header">
       
        <img src="https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/05/slss.webp?fit=564%2C1004&ssl=1" alt=""/>
       
        <strong className="HeaderBrand">
          <Anchor />
          <span>cPainel</span>
        </strong>
        <hr />

        <TextField
          id="HeaderSearchBar"
          label="Oque deseja ?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ManageSearch sx={{color:'#fff'}} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Send sx={{color:'#fff'}} />
              </InputAdornment>
            ),
          }}
          sx={{
            margin: "10px 0",
            input:{color:'white'},
            "& ::placeholder":{
                color:"white",
            },
            "& label": {
                color: "white"
              },
              "&:hover label": {
                fontWeight: 700
              },
              "& label.Mui-focused": {
                color: "white"
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white"
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                  borderWidth: 2,
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                  color:'white',
                }
              }
          }}
          variant="outlined"
          placeholder="Busque por algo"
        />

        <section className="HeaderNavbar">
          <p><Home /> <span>Painel</span> </p>
          <p><PersonAdd /> <span>Cadastro de Clientes</span> </p>
          <p><PostAdd /> <span>Cadastro de Produtos</span> </p>
          <p><Help /> <span>Ajuda</span> </p>
        </section>
      </div>
     
      <div className="cPainel">b</div>
    </section>
  );
};
export default Dashboard;
