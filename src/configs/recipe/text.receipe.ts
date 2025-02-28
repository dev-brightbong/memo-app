import { defineRecipe } from "@chakra-ui/react";

/**
 * chakra-ui recipe 파일 컨벤션
 * 레시피이름.recipe.ts
 * 레시피 이름은 소문자로 작성
 * @title 텍스트 레시피
 */
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
