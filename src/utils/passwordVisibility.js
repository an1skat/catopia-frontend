export const togglePasswordVisibility = (inputId) => {
  const passwordInput = document.getElementById(inputId);
  if (passwordInput) {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
  }
};
