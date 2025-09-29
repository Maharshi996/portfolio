import React, { useState } from "react";
import { Box, Button, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { getValidationRules, getErrorMessage } from "./utils";

function ContactForm({ data }: any) {
  const { buttons, inputFields } = data?.contact?.[0] || {};
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [submittedData, setSubmittedData] = useState<any>(null);

  const onSubmit = (formData: any) => {
    setSubmittedData(formData);
    reset();
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            width: "60vw",
            margin: "0 auto",
            gap: "1vw",
          }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: "2fr 2fr",
              gap: "1vw",
            }}
          >
            {Array.isArray(inputFields) &&
              inputFields.length > 1 &&
              inputFields
                .slice(0, inputFields.length - 1)
                .map((field: any, index: number) => {
                  const validation = getValidationRules(index);
                  const errorObj = errors[field?.name || `field${index}`];
                  const errorMsg = getErrorMessage(errorObj);
                  return (
                    <Box key={field?._key} sx={{ width: "100%" }}>
                      <Input
                        placeholder={field?.placeholder || ""}
                        type={field?.type || "text"}
                        sx={{
                          padding: 1,
                          border: "1px solid #ccc",
                          width: "100%",
                          color: "white",
                          "&.Mui-focused": {
                            border: "1px solid violet",
                          },
                        }}
                        {...register(
                          field?.name || `field${index}`,
                          validation
                        )}
                      />
                      {errorMsg && (
                        <Box sx={{ color: "#ff1744", fontSize: 12, mt: 0.5 }}>
                          {errorMsg}
                        </Box>
                      )}
                    </Box>
                  );
                })}
          </Box>
          {inputFields?.length > 0 && (
            <Box>
              <TextField
                key={
                  inputFields[inputFields.length - 1]?._key || "message-field"
                }
                placeholder={
                  inputFields[inputFields.length - 1]?.placeholder || "Message"
                }
                multiline
                rows={4}
                sx={{
                  border: "1px solid #ccc",
                  color: "black",
                  width: "100%",
                }}
                {...register(
                  inputFields[inputFields.length - 1]?.name || "message"
                )}
              />
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ margin: 1, paddingX: 8, letterSpacing: 1.5 }}
          >
            {buttons?.[0]?.label || "Submit"}
          </Button>
        </Box>
      </form>
      {submittedData && (
        <Box sx={{ color: "white", mt: 2, textAlign: "center" }}>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
}

export default ContactForm;
