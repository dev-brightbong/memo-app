import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";
import colors from "./colors";
import textStyles from "./text-styles";
import breakpoints from "./responsive";

const config = defineConfig({
  theme: {
    breakpoints,
    textStyles,
    tokens: {
      colors,
    },
  },
});

export default createSystem(defaultConfig, config);
