import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import { useState } from "react"

const TextFieldComp = () => {
    const [err, setErr] = useState(true)
  return (
    <Container maxWidth="md" sx={{mt: 4}} align="center">
        <TextField id="email" label="email" type="email" variant="outlined" placeholder="Enter your email" color="warning" required fullWidth margin="normal" error={err} helperText={err && "Yanlis email"} />
        <TextField id="password" type="password" label="password" variant="filled" fullWidth margin="normal" />
        <TextField id="adress" label="adress" variant="standard" type="text" fullWidth margin="normal" sx={{backgroundColor: "secondary.light"}} />
    </Container>
  )
}

export default TextFieldComp