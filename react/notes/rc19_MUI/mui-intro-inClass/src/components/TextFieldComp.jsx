import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"

const TextFieldComp = () => {
  return (
    <Container maxWidth="md" sx={{m: 4}} align="center">
        <TextField id="email" label="email" variant="outlined" placeholder="Enter your email" color="warning" required fullWidth />
        <TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
        <TextField id="standard-basic" label="Standard" variant="standard" fullWidth />
    </Container>
  )
}

export default TextFieldComp