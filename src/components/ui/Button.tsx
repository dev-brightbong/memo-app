import {
  chakra,
  HTMLChakraProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";
import { buttonRecipe } from "@/configs/recipe/button.recipe";

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export interface ButtonProps
  extends React.PropsWithChildren<ButtonVariantProps>,
    HTMLChakraProps<"button"> {}

export const Button = (props: ButtonProps) => {
  const { visual, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ visual, size });

  return <chakra.button css={styles} {...restProps} />;
};
