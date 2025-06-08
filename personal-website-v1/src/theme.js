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
            background: "purple",
            color: "white",
            "&:hover": {
              background: "black",
              border: "1px solid rgb(154, 91, 206)",
              boxShadow: "0px 0px 10px rgba(230, 149, 235, 0.8)",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "#fff",
            background: "black",
            border: "1px solid rgb(154, 91, 206)",
            "&:hover": {
              border: "0px",
              boxShadow: "0px 0px 10px rgba(230, 149, 235, 0.8)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
