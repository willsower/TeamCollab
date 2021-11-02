import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // Light Gray
    primary: {
      main: "#D2D3D3",
    },
    // Dark Gray
    secondary: {
      main: "#2D3032",
    },
    // Pop Color (Backgground)
    bg_tercerary: {
      backgroundColor: "#9615DB",
      color: "#fff",
    },
    b_tercerary: {
        borderColor: "#9615DB",
        color: "#9615DB",
    },
    error: {
      main: red.A400,
    },
    // Light Gray
    background: {
      default: "#eee",
    },
  },
});

export default theme;
