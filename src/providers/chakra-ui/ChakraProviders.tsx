import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import theme from "@/configs/theme/theme";

export interface ChakraProviderProps {
  children: React.ReactNode;
}

const ChakraProviders = ({ children }: ChakraProviderProps) => {
  return (
    <>
      <ChakraProvider value={theme}>
        <ThemeProvider>{children}</ThemeProvider>
      </ChakraProvider>
    </>
  );
};
export default ChakraProviders;
