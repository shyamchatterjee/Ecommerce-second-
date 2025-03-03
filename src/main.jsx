import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import { Contextfuntion } from "./appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
