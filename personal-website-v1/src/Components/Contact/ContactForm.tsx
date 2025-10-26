import React, { useMemo, useState } from "react";
import { Box, Button, InputBase, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { getValidationRules, getErrorMessage } from "./utils";
import { sendEmail } from "./utils";
import { useDeviceType } from "../../utils/compatible.ts";

function ContactForm({ data }: any) {
  const { buttons, inputFields } = data?.contact?.[0] || {};

  const { isMobile, isTablet, isDesktop } = useDeviceType();
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

  // Precompute message field related values outside JSX
  const fields = Array.isArray(inputFields) ? inputFields : [];
  const hasMessage = fields.length > 0;
  const messageField = hasMessage ? fields[fields.length - 1] : null;
  const messageValidation = useMemo(() => {
    if (!messageField) return undefined;
    return getValidationRules(messageField, fields.length - 1);
  }, [messageField, fields.length]);
  const messageErrorObj = messageField
    ? errors[messageField?.name || "message"]
    : undefined;
  const messageErrorMsg = getErrorMessage(messageErrorObj);

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
            padding: isMobile ? " 6vw" : "4vw 4vw 3vw 4vw",
            width: isMobile ? "85vw" : isTablet ? "70vw" : "60vw",
            margin: isMobile ? "10vw auto" : isTablet ? "6vw auto" : "4vw auto",
            gap: isMobile ? "3vw" : "1vw",
            borderRadius: "0.3vw",
            boxShadow: "0px 0px 20px rgb(74, 69, 74)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "2fr"
                : "2fr 2fr",
              gap: isMobile ? "3vw" : "1vw",
            }}
          >
            {Array.isArray(inputFields) &&
              inputFields.length > 1 &&
              inputFields
                .slice(0, inputFields.length - 1)
                .map((field: any, index: number) => {
                  const validation = getValidationRules(field, index);
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
                          fontSize: isDesktop
                            ? "1vw"
                            : isMobile
                            ? "3vw"
                            : "1.5vw",
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
          {hasMessage && (
            <Box>
              <>
                <TextField
                  key={messageField?._key || "message-field"}
                  placeholder={messageField?.placeholder || "Message"}
                  multiline
                  rows={isMobile ? 6 : isTablet ? 4 : 4}
                  sx={{
                    color: "black",
                    width: "100%",

                    "&.Mui-focused": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #ccc",
                      borderRadius: 0,
                      padding: isMobile ? 1 : isTablet ? 1 : 1,
                      fontSize: isDesktop ? "1vw" : isMobile ? "3vw" : "1.5vw",
                    },
                    fieldset: {
                      border: "none",
                    },
                  }}
                  {...register(
                    messageField?.name || "message",
                    messageValidation
                  )}
                />
                {messageErrorMsg && (
                  <Box sx={{ color: "#ff1744", fontSize: 12, mt: 0.5 }}>
                    {messageErrorMsg}
                  </Box>
                )}
              </>
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontSize: isMobile ? "3vw" : isTablet ? "1.5vw" : "1vw",
                margin: isMobile ? "1vw" : "1vw",
                paddingX: isMobile ? "2vw" : isTablet ? "2vw" : "1vw",
                letterSpacing: 1.5,
              }}
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
