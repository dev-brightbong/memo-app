import { useState } from "react";
import {
  DialogBody,
  DialogDescription,
  DialogTitle,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  BaseModalProps,
  ConfirmModalProps,
  CreateUpdateModalProps,
  DetailModalProps,
} from "@/providers/modal/modal.type";
import {
  DialogBackdrop,
  DialogContent,
  DialogFooter,
  DialogRoot,
} from "../ui/dialog";
import { Button } from "../Button/Button";
import Text from "../Text/Text";

export namespace Modal {
  export const BaseModal = ({
    open,
    children,
    dialogContentProps,
    onClose,
  }: BaseModalProps) => {
    return (
      <DialogRoot
        closeOnEscape={false}
        closeOnInteractOutside={false}
        open={open}
        onOpenChange={onClose}
      >
        <DialogBackdrop />
        <DialogContent p="16px" {...dialogContentProps}>
          {children}
        </DialogContent>
      </DialogRoot>
    );
  };

  export const ConfirmModal = ({
    open,
    title,
    content,
    confirmText = "확인",
    cancelText = "취소",
    onClose,
    onConfirm,
  }: ConfirmModalProps) => {
    const handleConfirm = () => {
      onConfirm?.();
      onClose();
    };

    return (
      <Modal.BaseModal open={open} onClose={onClose}>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogBody>
        <DialogFooter>
          <Button visual="secondary" onClick={onClose}>
            {cancelText}
          </Button>
          <Button visual="secondary" onClick={handleConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </Modal.BaseModal>
    );
  };

  export const CreateUpdateModal = ({
    open,
    onClose,
    initialTitle = "",
    initialContent = "",
    onSave,
    saveText = "저장",
    cancelText = "취소",
  }: CreateUpdateModalProps) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    const handleSave = () => {
      onSave({ title, content });
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    };

    return (
      <Modal.BaseModal open={open} onClose={onClose}>
        <VStack alignItems="flex-start">
          <Text color="colors.common.black">제목</Text>
          <Input
            placeholder="제목을 입력해주세요 :)"
            value={title}
            onChange={handleTitleChange}
          />

          <Text color="colors.common.black">내용</Text>
          <Textarea
            resize="none"
            minHeight="300px"
            placeholder="내용을 입력해주세요 :)"
            value={content}
            onChange={handleContentChange}
          />

          <HStack w="100%" justifyContent={"flex-end"}>
            <Button visual="secondary" onClick={handleSave}>
              {saveText}
            </Button>
            <Button visual="secondary" onClick={onClose}>
              {cancelText}
            </Button>
          </HStack>
        </VStack>
      </Modal.BaseModal>
    );
  };

  export const DetailModal = ({
    open,
    onClose,
    title,
    content,
    closeText = "닫기",
  }: DetailModalProps) => {
    return (
      <Modal.BaseModal open={open} onClose={onClose}>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogBody>
        <DialogFooter>
          <Button visual="secondary" onClick={onClose}>
            {closeText}
          </Button>
        </DialogFooter>
      </Modal.BaseModal>
    );
  };
}
