import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#dc143c",
      },
      secondary:{
        main: deepOrange[500],
      }
    },
  })
  return( 
     <ThemeProvider theme={theme}>
        <Home />
     </ThemeProvider>
  );
}

export default App;
