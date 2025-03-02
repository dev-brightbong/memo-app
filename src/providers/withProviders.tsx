import React from "react";
import ChakraProviders from "@/providers/chakra-ui/ChakraProviders";
import { ModalProvider } from "@/providers/modal/ModalProvider";

const withProviders = (Component: React.ComponentType) => {
  return function WithProviders(props: any) {
    return (
      <ChakraProviders>
        <ModalProvider>
          <Component {...props} />
        </ModalProvider>
      </ChakraProviders>
    );
  };
};

export default withProviders;
