import { textRecipe } from "@/configs/recipe/text.receipe";
import {
  chakra,
  HTMLChakraProps,
  RecipeVariantProps,
  useRecipe,
} from "@chakra-ui/react";

type TextVariantProps = RecipeVariantProps<typeof textRecipe>;

export interface TextProps
  extends React.PropsWithChildren<TextVariantProps>,
    HTMLChakraProps<"p"> {}

const Text = (props: TextProps) => {
  const { visual, ...restProps } = props;

  const recipe = useRecipe({ recipe: textRecipe });
  const styles = recipe({ visual });

  return <chakra.p css={styles} {...restProps} />;
};

export default Text;
