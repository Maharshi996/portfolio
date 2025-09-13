import { Box, Button, Input, TextField } from "@mui/material";
import React from "react";

function ContactForm(props) {
  const { buttons, inputFields } = props;
  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          backgroundColor: "white",
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        {inputFields?.map((field, index) => {
          const { type, label, name, placeholder } = field;
          return (
            <TextField
              key={index}
              type={type}
              label={label}
              name={name}
              placeholder={placeholder}
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2, backgroundColor: "white" }}
            />
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        {buttons?.map((button, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            sx={{ margin: 1 }}
            onClick={button?.onClick}
          >
            {button?.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default ContactForm;
