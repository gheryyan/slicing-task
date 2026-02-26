
export const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, "");
};


export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};