import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB11AB",
      light: "#F10000",
    },

    info: {
      main: "#2C68F5",
      light: " #08A592",
    },

    success: {
      main: "#2FC509",
      light: "#3CDE14",
    },

    black: {
      main: "#292929",
      light: "#384255",
      dark: "#1A1A25",
    },
    warning: {
      main: "#F99808",
    },

    lightGrey: {
      main: "#E8E8E8",
      light: "#F4F4F4",
      dark: "#E0E2E7",
    },
    darkGrey: {
      main: "#909CB5",
      light: "#CDCDCD",
      dark: "#91969E",
    },
  },
});

export default theme;
