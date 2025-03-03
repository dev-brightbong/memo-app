import { v4 as uuidv4 } from "uuid";
import { toaster } from "@/components/ui/toaster";
import { getRandomPostItColor, getCurrentTime } from "@/utils/utils";
import {
  CREATE_UPDATE_MODAL,
  useContextModal,
} from "@/providers/modal/ModalProvider";
import useMemoStore from "@/stores/memo/useMemoStore";
import { validateContent, validateTitle } from "@/utils/validate";

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
    const titleValidate = validateTitle(title);
    if (!titleValidate.isValid) {
      toaster.create({
        description: titleValidate.message,
        type: "error",
      });
      return;
    }

    const contentValidate = validateContent(content);
    if (!contentValidate.isValid) {
      toaster.create({
        description: contentValidate.message,
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
