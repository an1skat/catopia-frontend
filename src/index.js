import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./utils/authContext.jsx";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./Theme.jsx";

const theme = mainTheme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/catopia-frontend">
      <AuthProvider>
        <ThemeProvider theme={theme}> 
          <App />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
