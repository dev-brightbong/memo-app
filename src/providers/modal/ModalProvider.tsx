import { createContext, useContext, useState, ReactNode } from "react";
import {
  ConfirmModalProps,
  CreateUpdateModalProps,
  DetailModalProps,
  ModalPropsMap,
} from "./modal";

import { Modal } from "@/components/Modal/Modal";

type ModalType = keyof ModalPropsMap;

export const CREATE_UPDATE_MODAL = "CreateUpdateModal";
export const DETAIL_MODAL = "DetailModal";
export const CONFIRM_MODAL = "ConfirmModal";

interface ModalContextType {
  openModal: <T extends ModalType>(
    modalType: T,
    modalProps?: ModalPropsMap[T]
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [modalProps, setModalProps] = useState<ModalPropsMap[ModalType] | null>(
    null
  );
  const isOpen = modalType !== null;

  const openModal = <T extends ModalType>(
    type: T,
    props?: ModalPropsMap[T]
  ) => {
    setModalType(type);
    setModalProps(props ?? null);
  };

  const closeModal = () => {
    setModalType(null);
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && modalType === DETAIL_MODAL && modalProps && (
        <Modal.DetailModal {...(modalProps as DetailModalProps)} />
      )}

      {isOpen && modalType === CREATE_UPDATE_MODAL && modalProps && (
        <Modal.CreateUpdateModal {...(modalProps as CreateUpdateModalProps)} />
      )}

      {isOpen && modalType === CONFIRM_MODAL && modalProps && (
        <Modal.ConfirmModal {...(modalProps as ConfirmModalProps)} />
      )}
    </ModalContext.Provider>
  );
};

export const useContextModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useContextModal context is not found");
  }
  return context;
};
