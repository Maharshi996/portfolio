import { Box, Button, Input, TextField } from "@mui/material";
import React from "react";

function Contact(props) {
  const { buttons, contact, id } = props?.data;

  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
      id={id}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4vw 8vw",
          gap: "2vw",
          color: "white",
        }}
      >
        {contact?.map((item, index) => (
          <Input
            key={index}
            type={item?.inputType}
            placeholder={item?.placeHolder}
            sx={{
              border: "1px solid purple",
              borderRadius: "8px",
              width: "100%",
              backgroundColor: "transparent",
              color: "white",
              padding: "1vw",
            }}
          />
        ))}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2vw",
            marginTop: "2vw",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {buttons?.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{
                color: "white",
                borderRadius: "8px",
                width: "12vw",
                ":hover": {
                  borderBottom: "2px solid purple",
                },
              }}
            >
              {button?.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
