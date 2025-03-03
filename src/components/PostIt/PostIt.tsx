import { Box, HStack, StackProps, VStack } from "@chakra-ui/react";
import Text from "../Text/Text";
import UpdateIcon from "../Icons/UpdateIcon";
import DeleteIcon from "../Icons/DeleteIcon";

/**
 * 포스트잇 텍스트 색상
 */
const getPostItTextColor = (bgColor: PostItProps["bgColor"]) => {
  if (bgColor === "colors.common.yellow") {
    return "colors.common.black";
  }
  return "colors.common.white";
};

export interface PostItProps extends StackProps {
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  hasEdit?: boolean;
  bgColor:
    | "colors.common.yellow"
    | "colors.common.green"
    | "colors.common.red"
    | "colors.common.orange"
    | "colors.common.blue"
    | "colors.common.purple";
  onDelete?: () => void;
  onUpdate?: () => void;
}

export namespace PostIt {
  export const FoldedRectangle = () => {
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

  export const Card = ({
    title,
    content,
    createdAt,
    updatedAt,
    bgColor = "colors.common.yellow",
    hasEdit = true,
    onDelete,
    onUpdate,
    children,
    ...props
  }: PostItProps) => {
    const handleOnUpdate = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation();
      onUpdate?.();
    };

    const handleOnDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation();
      onDelete?.();
    };

    return (
      <VStack
        width={{ base: "100%", md: "240px" }}
        minH="216px"
        position={"relative"}
        alignItems={"flex-start"}
        overflow="hidden"
        pt="20px"
        px="20px"
        cursor="pointer"
        bgColor={bgColor}
        {...props}
      >
        <Text color={getPostItTextColor(bgColor)} textStyle="title">
          {title.length > 14 ? `${title?.slice(0, 14)}...` : title}
        </Text>
        <Text color={getPostItTextColor(bgColor)} textStyle="content">
          {content.length > 84 ? `${content?.slice(0, 84)}...` : content}
        </Text>

        <HStack position="absolute" bottom="40px" left="10px">
          {createdAt && (
            <Text color={getPostItTextColor(bgColor)} textStyle="date">
              작성일: {createdAt}
            </Text>
          )}
          {updatedAt && (
            <Text color={getPostItTextColor(bgColor)} textStyle="date">
              수정일: {updatedAt}
            </Text>
          )}
        </HStack>

        {hasEdit && (
          <HStack position="absolute" gap="0" bottom="10px" left="10px">
            <UpdateIcon width="16px" height="16px" onClick={handleOnUpdate} />
            <DeleteIcon width="16px" height="16px" onClick={handleOnDelete} />
          </HStack>
        )}
        <FoldedRectangle />
        {children}
      </VStack>
    );
  };
}

export default PostIt;
