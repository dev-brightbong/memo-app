import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";
import colors from "./colors";
import textStyles from "./text-styles";

const config = defineConfig({
  theme: {
    textStyles,
    tokens: {
      colors: {
        ...colors,
      },
    },
  },
});

export default createSystem(defaultConfig, config);
