import { v4 as uuidv4 } from "uuid";
import { toaster } from "@/components/ui/toaster";
import { getRandomPostItColor, getCurrentTime } from "@/utils/utils";
import {
  CREATE_UPDATE_MODAL,
  useContextModal,
} from "@/providers/modal/ModalProvider";
import useMemoStore from "@/stores/memo/useMemoStore";

const useCreateButton = () => {
  const { openModal, closeModal } = useContextModal();
  const { onAddMemo } = useMemoStore();

  const createMemo = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    if (title.trim() === "" || content.trim() === "") {
      toaster.create({
        description: "제목과 내용을 입력해주세요.",
        type: "error",
      });
      return;
    }

    if (content.trim().length < 10) {
      toaster.create({
        description: "내용은 최소 10자 이상 입력해주세요.",
        type: "error",
      });
      return;
    }

    onAddMemo({
      id: uuidv4(),
      title: title.trim(),
      content: content.trim(),
      bgColor: getRandomPostItColor(),
      createdAt: getCurrentTime(new Date()),
      updatedAt: getCurrentTime(new Date()),
    });

    closeModal();
    toaster.create({
      description: "메모가 성공적으로 작성되었어요.",
      type: "success",
    });
  };

  const handleOpenCreateUpdateModal = () => {
    openModal(CREATE_UPDATE_MODAL, {
      open: true,
      onClose: () => {
        closeModal();
      },
      onSave: ({ title, content }) => {
        createMemo({ title, content });
      },
    });
  };

  return {
    createMemo,
    handleOpenCreateUpdateModal,
  };
};

export default useCreateButton;
