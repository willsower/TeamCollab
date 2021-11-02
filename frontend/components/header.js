import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../utils/theme";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Header({ sections, title }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Box>
        {/* <AppBar position="static"> */}
          {/* <Toolbar> */}
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > */}
              {/* <MenuIcon /> */}
            {/* </IconButton> */}
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}

            {/* Login Button */}
            <Button
              style={theme.palette.b_tercerary}
              size="medium"
              variant="outlined"
            >
              Login
            </Button>

            {/* SignUp Button */}
            <Button
              style={theme.palette.bg_tercerary}
              size="medium"
              variant="contained"
            >
              Sign Up
            </Button>
          {/* </Toolbar> */}
        {/* </AppBar> */}
      {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
}

export default Header;
