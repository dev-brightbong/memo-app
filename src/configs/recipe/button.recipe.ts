import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    visual: {
      solid: {
        bg: "colors.common.blue",
        color: "colors.common.white",
        cursor: "pointer",
      },
    },
    size: {
      default: {
        padding: "4px 16px",
        fontSize: "24px",
        minWidth: "100px",
        borderRadius: "8px",
      },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "default",
  },
});
