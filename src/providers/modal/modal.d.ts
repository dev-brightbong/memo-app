export interface BaseModalProps {
  open: boolean;
  dialogContentProps?: DialogContentProps;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface ConfirmModalProps extends BaseModalProps {
  title: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

export interface CreateUpdateModalProps extends BaseModalProps {
  initialTitle?: string;
  initialContent?: string;
  saveText?: string;
  cancelText?: string;
  onSave: ({ title, content }: { title: string; content: string }) => void;
}

export interface DetailModalProps extends BaseModalProps {
  title: string;
  content: string;
  closeText?: string;
}

export type ModalPropsMap = {
  CreateUpdateModal: Omit<CreateUpdateModalProps, "open">;
  DetailModal: Omit<DetailModalProps, "open">;
  ConfirmModal: Omit<ConfirmModalProps, "open">;
};
