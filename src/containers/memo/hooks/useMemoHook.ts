import { useBreakpointValue } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import {
  CONFIRM_MODAL,
  CREATE_UPDATE_MODAL,
  DETAIL_MODAL,
  useContextModal,
} from "@/providers/modal/ModalProvider";
import useMemoStore from "@/stores/memo/useMemoStore";
import { getCurrentTime } from "@/utils/utils";
import { validateContent, validateTitle } from "@/utils/validate";

const useMemoHook = () => {
  const columns = useBreakpointValue(
    { base: 1, md: 3, lg: 4 },
    { ssr: typeof window === "undefined" }
  );
  const { openModal, closeModal } = useContextModal();
  const { list, onDeleteMemo, onUpdateMemo } = useMemoStore();

  const updateMemo = ({
    title,
    content,
    id,
  }: {
    title: string;
    content: string;
    id: string;
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

    onUpdateMemo({ id, title, content, updatedAt: getCurrentTime(new Date()) });
    closeModal();
    toaster.create({
      description: "메모가 수정되었습니다.",
      type: "success",
    });
  };

  const deleteMemo = (id: string) => {
    onDeleteMemo(id);
    closeModal();
    toaster.create({
      description: "메모가 삭제되었습니다.",
      type: "success",
    });
  };

  const onOpenDeleteModal = (id: string) => {
    openModal(CONFIRM_MODAL, {
      title: "삭제",
      content: "정말 삭제하시겠어요?",
      confirmText: "삭제",
      open: true,
      onClose: () => {
        closeModal();
      },
      onConfirm: () => {
        deleteMemo(id);
      },
    });
  };

  const onOpenDetailModal = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    openModal(DETAIL_MODAL, {
      title: title,
      content: content,
      open: true,
      onClose: () => {
        closeModal();
      },
    });
  };

  const onOpenUpdateModal = ({
    initialTitle,
    initialContent,
    id,
  }: {
    initialTitle: string;
    initialContent: string;
    id: string;
  }) => {
    openModal(CREATE_UPDATE_MODAL, {
      initialTitle,
      initialContent,
      open: true,
      onClose: () => {
        closeModal();
      },
      onSave: ({ title, content }) => {
        updateMemo({ title, content, id });
      },
    });
  };

  return {
    list,
    columns,
    modals: {
      onOpenDeleteModal,
      onOpenDetailModal,
      onOpenUpdateModal,
    },
  };
};

export default useMemoHook;
