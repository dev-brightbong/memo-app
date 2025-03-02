import { defineRecipe } from "@chakra-ui/react";

/**
 * chakra-ui recipe 파일 컨벤션
 * 레시피이름.recipe.ts
 * 레시피 이름은 소문자로 작성
 * @title 버튼 레시피
 */
export const buttonRecipe = defineRecipe({
  variants: {
    visual: {
      primary: {
        bg: "colors.common.white",
        color: "colors.common.black",
        cursor: "pointer",
      },
      secondary: {
        bg: "colors.common.black",
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
    visual: "primary",
    size: "default",
  },
});
