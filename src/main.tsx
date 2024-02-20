import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "animate.css";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import UserAAuthContextProvider, {
  // ChangeOccur,
} from "./firebase/authFuntions.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserAAuthContextProvider>
        <App />
      </UserAAuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
