import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/configs/theme/theme";

export interface ChakraProviderProps {
  children: React.ReactNode;
}

const ChakraProviders = ({ children }: ChakraProviderProps) => {
  return (
    <>
      <ChakraProvider value={theme}>{children}</ChakraProvider>
    </>
  );
};
export default ChakraProviders;
