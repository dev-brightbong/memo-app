import { Center } from "@chakra-ui/react";
import { CREATE_UPDATE_MODAL } from "@/providers/modal/ModalProvider";
import { useContextModal } from "@/providers/modal/ModalProvider";
import PlusIcon from "@/components/Icons/PlusIcon";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import UpdateIcon from "@/components/Icons/UpdateIcon";

const CreateButton = () => {
  const { openModal, closeModal } = useContextModal();

  const handleOpenCreateUpdateModal = () => {
    openModal(CREATE_UPDATE_MODAL, {
      initialTitle: "제목 테스트",
      initialContent: "내용 테스트",
      open: true,
      onClose: () => {
        closeModal();
      },
      onSave: () => {},
    });
  };
  return (
    <>
      <Center
        zIndex={9}
        position={"fixed"}
        bottom={{ base: "10px", md: "80px" }}
        right={{ base: "10px", md: "80px" }}
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
