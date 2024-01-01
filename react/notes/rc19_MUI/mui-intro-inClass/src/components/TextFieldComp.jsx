import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"

const TextFieldComp = () => {
  return (
    <Container maxWidth="md" sx={{mt: 4}} align="center">
        <TextField id="email" label="email" type="email" variant="outlined" placeholder="Enter your email" color="warning" required fullWidth margin="normal" />
        <TextField id="password" type="password" label="password" variant="filled" fullWidth margin="normal" />
        <TextField id="adress" label="adress" variant="standard" type="text" fullWidth margin="normal" />
    </Container>
  )
}

export default TextFieldComp