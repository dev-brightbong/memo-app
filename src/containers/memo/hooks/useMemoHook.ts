import { v4 as uuidv4 } from "uuid";
import { useBreakpointValue } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import {
  CONFIRM_MODAL,
  CREATE_UPDATE_MODAL,
  DETAIL_MODAL,
  useContextModal,
} from "@/providers/modal/ModalProvider";
import useMemoStore from "@/stores/memo/useMemoStore";
import { MemoType } from "@/stores/memo/memo";
import { getCurrentTime, getRandomPostItColor } from "@/utils/utils";
import { validateContent, validateTitle } from "@/utils/validate";

const createButton: MemoType = {
  id: "new",
  title: "",
  content: "",
  createdAt: "",
  updatedAt: "",
  bgColor: "colors.common.yellow",
};

/**
 * @description 메모 CRUD & 모달 관리 훅
 */
const useMemoHook = () => {
  const columns = useBreakpointValue(
    { base: 1, md: 3, lg: 4 },
    { ssr: typeof window === "undefined" }
  );
  const { openModal, closeModal } = useContextModal();
  const { list, onDeleteMemo, onUpdateMemo, onAddMemo } = useMemoStore();

  /**
   * @description 메모 목록
   */
  const memoList = [createButton, ...list];

  /**
   * @description 메모 유효성 검사
   */
  const handleValidation = (title: string, content: string) => {
    const { isValid: titleIsValid, message: titleMessage } =
      validateTitle(title);
    if (!titleIsValid) {
      toaster.create({
        description: titleMessage,
        type: "error",
      });
      return false;
    }

    const { isValid: contentIsValid, message: contentMessage } =
      validateContent(content);
    if (!contentIsValid) {
      toaster.create({
        description: contentMessage,
        type: "error",
      });
      return false;
    }

    return true;
  };

  /**
   * @description 성공 처리
   */
  const handleSuccess = ({
    callback,
    description,
  }: {
    callback: () => void;
    description: string;
  }) => {
    callback();
    closeModal();
    toaster.create({
      description,
      type: "success",
    });
  };

  /**
   * @description 메모 생성
   */
  const createMemo = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    if (!handleValidation(title, content)) return;

    handleSuccess({
      callback: () => {
        onAddMemo({
          id: uuidv4(),
          title: title.trim(),
          content: content.trim(),
          bgColor: getRandomPostItColor(),
          createdAt: getCurrentTime(new Date()),
          updatedAt: getCurrentTime(new Date()),
        });
      },
      description: "메모가 추가되었습니다.",
    });
  };

  /**
   * @description 메모 수정
   */
  const updateMemo = ({
    title,
    content,
    id,
  }: {
    title: string;
    content: string;
    id: string;
  }) => {
    if (!handleValidation(title, content)) return;

    handleSuccess({
      callback: () => {
        onUpdateMemo({
          id,
          title,
          content,
          updatedAt: getCurrentTime(new Date()),
        });
      },
      description: "메모가 수정되었습니다.",
    });
  };

  /**
   * @description 메모 삭제
   */
  const deleteMemo = (id: string) => {
    handleSuccess({
      callback: () => {
        onDeleteMemo(id);
      },
      description: "메모가 삭제되었습니다.",
    });
  };

  /**
   * @description 메모 생성 모달 열기
   */
  const onOpenCreateModal = () => {
    openModal(CREATE_UPDATE_MODAL, {
      onClose: () => {
        closeModal();
      },
      onSave: ({ title, content }) => {
        createMemo({ title, content });
      },
    });
  };

  /**
   * @description 메모 상세 모달 열기
   */
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
      onClose: () => {
        closeModal();
      },
    });
  };

  /**
   * @description 메모 수정 모달 열기
   */
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
      onClose: () => {
        closeModal();
      },
      onSave: ({ title, content }) => {
        updateMemo({ title, content, id });
      },
    });
  };

  /**
   * @description 메모 삭제 모달 열기
   */
  const onOpenDeleteModal = (id: string) => {
    openModal(CONFIRM_MODAL, {
      title: "삭제",
      content: "정말 삭제하시겠어요?",
      confirmText: "삭제",
      onClose: () => {
        closeModal();
      },
      onConfirm: () => {
        deleteMemo(id);
      },
    });
  };

  return {
    list: memoList,
    columns,
    modals: {
      onOpenCreateModal,
      onOpenDetailModal,
      onOpenUpdateModal,
      onOpenDeleteModal,
    },
  };
};

export default useMemoHook;
