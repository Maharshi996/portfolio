import emailjs from "@emailjs/browser";
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Utility functions for ContactForm validations

export function getValidationRules(index) {
  if (index === 0 || index === 1) {
    // Name validations
    return {
      required: "Name is required",
      minLength: { value: 2, message: "Name must be at least 2 characters" },
      maxLength: { value: 30, message: "Name must be at most 30 characters" },
    };
  } else if (index === 2) {
    // Email validations
    return {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    };
  } else if (index === 3) {
    // Mobile number validations
    return {
      required: "Mobile number is required",
      pattern: {
        value: /^\d{10}$/,
        message: "Mobile number must be 10 digits",
      },
    };
  }
  return {};
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
