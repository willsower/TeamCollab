import * as React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../utils/theme";

function Header({ sections, title }) {
  return (
    <ThemeProvider theme={theme}>
      <Button style = {theme.palette.b_tercerary} size="medium" variant="outlined">
        Login
      </Button>

      <Button style= {theme.palette.bg_tercerary} size="medium" variant="contained">
        Sign Up
      </Button>
    </ThemeProvider>
  );
}

export default Header;
