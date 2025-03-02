import { DETAIL_MODAL, useContextModal } from "@/providers/modal/ModalProvider";
import useMemoStore from "@/stores/memo/useMemoStore";
import { useBreakpointValue } from "@chakra-ui/react";

const useMemoHook = () => {
  const columns = useBreakpointValue(
    { base: 1, md: 3, lg: 4 },
    { ssr: typeof window === "undefined" }
  );

  const { openModal, closeModal } = useContextModal();
  const { list, onDeleteMemo, onUpdateMemo } = useMemoStore();

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

  return {
    list,
    columns,
    onOpenDetailModal
  };
};

export default useMemoHook;
