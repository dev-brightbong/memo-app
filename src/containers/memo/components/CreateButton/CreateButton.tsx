import { Center, CenterProps } from "@chakra-ui/react";
import PlusIcon from "@/components/Icons/PlusIcon";

export interface CreateButtonProps extends CenterProps {}

const CreateButton = ({ ...props }: CreateButtonProps) => {
  return (
    <>
      <Center
        as="button"
        zIndex={9}
        position={"absolute"}
        top={"50%"}
        left="50%"
        transform={"translate(-50%, -50%)"}
        bgColor="colors.common.white"
        width="80px"
        height="80px"
        borderRadius="99px"
        cursor="pointer"
        {...props}
      >
        <PlusIcon width="40px" height="40px" />
      </Center>
    </>
  );
};

export default CreateButton;
