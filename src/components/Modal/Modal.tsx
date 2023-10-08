import { Box,Container,Button } from "@mui/material"
import './Modal.css'

const Modal = () => {
  
  return (
    <Box id="#modalBox"
    sx={{
        textAlign:'center',
        position:'absolute',
        width:'90%',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        backgroundColor:'#edecec',
        zIndex:'10',
        display:'none',
        
    }}>
        <Container sx={{
            padding:'2rem',
        }}>
            <h1>Sucesso</h1><br/>
            <p>Conta criada com sucesso, clique em ok para retornar a página principal e realizar seu login na plataforma</p><br/>
            <Button variant="outlined" href={'/'}>Ok</Button>
        </Container>
    </Box>
  )
}

export default Modal