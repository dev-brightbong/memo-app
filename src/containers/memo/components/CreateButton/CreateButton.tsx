import { Center } from "@chakra-ui/react";
import PlusIcon from "@/components/Icons/PlusIcon";
import useCreateButton from "./hooks/useCreateButton";

const CreateButton = () => {
  const { handleOpenCreateUpdateModal } = useCreateButton();

  return (
    <>
      <Center
        zIndex={9}
        position={"fixed"}
        bottom={{ base: "10px", md: "40px" }}
        right={{ base: "10px", md: "40px" }}
        bgColor="colors.common.white"
        width="80px"
        height="80px"
        borderRadius="99px"
        cursor="pointer"
        onClick={handleOpenCreateUpdateModal}
      >
        <PlusIcon width="40px" height="40px" />
      </Center>
    </>
  );
};

export default CreateButton;
