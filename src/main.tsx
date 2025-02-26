import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ChakraProviders from "@/providers/chakra-ui/ChakraProviders.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProviders>
      <App />
    </ChakraProviders>
  </StrictMode>
);
