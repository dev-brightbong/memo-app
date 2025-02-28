import { defineRecipe } from "@chakra-ui/react";

export const textRecipe = defineRecipe({
  variants: {
    visual: {
      primary: {
        color: "colors.common.white",
        fontWeight: "400",
        fontSize: "16px",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
  },
});
