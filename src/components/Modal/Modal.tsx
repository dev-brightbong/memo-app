import { useState } from "react";
import { Button } from "../Button/Button";
import {
  DialogBackdrop,
  DialogContent,
  DialogFooter,
  DialogRoot,
} from "../ui/dialog";
import {
  DialogBody,
  DialogContentProps,
  DialogDescription,
  DialogTitle,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Text from "../Text/Text";

export namespace Modal {
  export const BaseModal = ({
    open,
    children,
    onClose,
    dialogContentProps,
  }: {
    open: boolean;
    children?: React.ReactNode;
    onClose: () => void;
    dialogContentProps?: DialogContentProps;
  }) => {
    return (
      <DialogRoot open={open} onOpenChange={onClose}>
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
  }: {
    open: boolean;
    title: string;
    content: string;
    confirmText?: string;
    cancelText?: string;
    onClose: () => void;
    onConfirm?: () => void;
  }) => {
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
          <Button bgColor="colors.common.black" onClick={onClose}>
            {cancelText}
          </Button>
          <Button bgColor="colors.common.black" onClick={handleConfirm}>
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
  }: {
    open: boolean;
    onClose: () => void;
    initialTitle?: string;
    initialContent?: string;
    onSave: ({ title, content }: { title: string; content: string }) => void;
    saveText?: string;
    cancelText?: string;
  }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    const handleSave = () => {
      onSave({ title, content });
      onClose();
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
            <Button bgColor="colors.common.black" onClick={handleSave}>
              {saveText}
            </Button>
            <Button bgColor="colors.common.black" onClick={onClose}>
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
  }: {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string;
    closeText?: string;
  }) => {
    return (
      <Modal.BaseModal open={open} onClose={onClose}>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogBody>
        <DialogFooter>
          <Button bgColor="colors.common.black" onClick={onClose}>
            {closeText}
          </Button>
        </DialogFooter>
      </Modal.BaseModal>
    );
  };
}
