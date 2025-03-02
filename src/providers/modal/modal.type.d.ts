interface BaseModalProps {
  open: boolean;
  onClose: () => void;
}

interface ConfirmModalProps extends BaseModalProps {
  title: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

interface CreateUpdateModalProps extends BaseModalProps {
  initialTitle?: string;
  initialContent?: string;
  saveText?: string;
  cancelText?: string;
  onSave: ({ title, content }: { title: string; content: string }) => void;
}

interface DetailModalProps extends BaseModalProps {
  title: string;
  content: string;
  closeText?: string;
}

export type ModalPropsMap = {
  CreateUpdateModal: CreateUpdateModalProps;
  DetailModal: DetailModalProps;
  ConfirmModal: ConfirmModalProps;
};
