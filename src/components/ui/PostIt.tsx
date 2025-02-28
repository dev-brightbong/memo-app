import { Box, StackProps, VStack } from "@chakra-ui/react";
import Text from "./Text";

/**
 * 포스트잇 텍스트 색상
 */
const getPostItTextColor = (bgColor: PostItProps["bgColor"]) => {
  if (bgColor === "colors.common.yellow") {
    return "colors.common.black";
  }
  return "colors.common.white";
};

/**
 * 접힌영역 표시
 */
const FoldedRectangle = () => {
  return (
    <Box position="absolute" bottom="0" right="0" width="20px" height="20px">
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg={"colors.common.black"}
        opacity={0.2}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="colors.common.black"
        clipPath="polygon(100% 0, 100% 100%, 0 100%)"
      />
    </Box>
  );
};

export interface PostItProps extends StackProps {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  bgColor?:
    | "colors.common.yellow"
    | "colors.common.green"
    | "colors.common.red"
    | "colors.common.orange"
    | "colors.common.blue"
    | "colors.common.purple";
  onDelete: () => void;
  onUpdate: () => void;
}

const PostIt = ({
  title,
  content,
  createdAt,
  updatedAt,
  bgColor = "colors.common.yellow",
  onDelete,
  onUpdate,
  ...props
}: Partial<PostItProps>) => {
  return (
    <VStack
      width={{ base: "100%", md: "240px" }}
      minH="216px"
      position={"relative"}
      overflow="hidden"
      alignItems={"flex-start"}
      pt="20px"
      px="20px"
      bgColor={bgColor}
      {...props}
    >
      <Text color={getPostItTextColor(bgColor)} textStyle="title">
        {title}
      </Text>
      <Text color={getPostItTextColor(bgColor)} textStyle="content">
        {content}
      </Text>
      <Text color={getPostItTextColor(bgColor)} textStyle="date">
        {createdAt}
      </Text>
      <Text color={getPostItTextColor(bgColor)} textStyle="date">
        {updatedAt}
      </Text>

      <FoldedRectangle />
    </VStack>
  );
};

export default PostIt;
