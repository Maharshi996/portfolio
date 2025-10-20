import emailjs from "@emailjs/browser";
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Utility functions for ContactForm validations

export function getValidationRules(field, index) {
  const isRequired = !!(field && field.required);
  const cmsMessage = field && field.errorMessage ? field.errorMessage : undefined;

  const base = {
    required: isRequired ? cmsMessage || "This field is required" : false,
  };

  const type = field && field.type ? String(field.type).toLowerCase() : undefined;

  if (type === "email") {
    return {
      ...base,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: cmsMessage || "Invalid email address",
      },
    };
  }

  if (type === "phone" || type === "tel" || type === "mobile") {
    return {
      ...base,
      pattern: {
        value: /^\d{10}$/,
        message: cmsMessage || "Mobile number must be 10 digits",
      },
    };
  }

  return base;
}

export function getErrorMessage(errorObj) {
  if (!errorObj) return "";
  if (typeof errorObj === "string") return errorObj;
  if (typeof errorObj === "object" && "message" in errorObj)
    return errorObj.message;
  return "";
}

export async function sendEmail(formData) {
  const templateParams = {
    ...formData,
  };
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}
