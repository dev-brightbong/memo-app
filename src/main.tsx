import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import withProviders from "./providers/withProviders.tsx";

const AppWithProviders = withProviders(App);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithProviders />
  </StrictMode>
);
