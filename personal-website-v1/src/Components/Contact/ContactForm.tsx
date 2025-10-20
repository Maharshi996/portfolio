import React, { useState } from "react";
import { Box, Button, Input, InputBase, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { getValidationRules, getErrorMessage } from "./utils";
import { sendEmail } from "./utils";

function ContactForm({ data }: any) {
  const { buttons, inputFields } = data?.contact?.[0] || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [submittedData, setSubmittedData] = useState<any>(null);

  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const onSubmit = async (formData: any) => {
    setSubmittedData(formData);
    try {
      await sendEmail(formData);
      setEmailStatus("Email sent successfully!");
      reset();
    } catch (error) {
      setEmailStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <Box id={data?.id}>
      {emailStatus && (
        <Box
          sx={{
            color: emailStatus.includes("success") ? "#4caf50" : "#ff1744",
            padding: 2,
            textAlign: "center",
          }}
        >
          {emailStatus}
        </Box>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            padding: "4vw 8vw",
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
                      <InputBase
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
                          "&:after": {
                            borderBottom: "none",
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
                  color: "black",
                  width: "100%",

                  "&.Mui-focused": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #ccc",
                    borderRadius: 0,
                    padding: 1,
                  },
                  fieldset: {
                    border: "none",
                  },
                }}
                {...register(
                  inputFields[inputFields.length - 1]?.name || "message"
                )}
              />
            </Box>
          )}
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
        </Box>
      </form>
    </Box>
  );
}

export default ContactForm;
