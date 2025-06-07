import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    background: {
      default: "#212121",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "rgb(154, 91, 206)",
            color: "white",
            border: "0px !important",
            "&:hover": {
              background: "#1565c0",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "#fff",
            background: "black",
            border: "2px solid rgb(154, 91, 206)",
            "&:hover": {
              background: "#7b1fa2",
            },
          },
        },
      ],
    },
  },
});

export default theme;
