import { defineRecipe } from "@chakra-ui/react";

export const textRecipe = defineRecipe({
  variants: {
    visual: {
      primary: { color: "colors.common.white" },
    },
  },
  defaultVariants: {
    visual: "primary",
  },
});
