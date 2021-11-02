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
    // <ThemeProvider theme={theme}>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Button size="small">Subscribe</Button>
    <Typography
      component="h2"
      variant="h5"
      color="inherit"
      align="center"
      noWrap
      sx={{ flex: 1 }}
    >
      {title}
    </Typography>
    <IconButton>
      <MenuIcon />
    </IconButton>
    <Button variant="outlined" size="small">
      Sign up
    </Button>
  </Toolbar>
    // </ThemeProvider>
  );
}

export default Header;
