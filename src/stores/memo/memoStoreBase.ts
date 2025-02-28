import { create } from "zustand";
import { MemoStoreType } from "./memo.type";
import { persist } from "zustand/middleware";
import { MEMO_STORAGE_KEY } from "@/utils/web-storage/memo-storage";
import createSelectors from "../helper/createSelectors";

/**
 * @title 메모 리스트를 관리하는 스토어입니다.
 * @description persist 미들웨어를 사용해 LocalStorage에 메모 리스트 정보를 저장합니다.
 *
 */
export const useMemoStoreBase = create<MemoStoreType>()(
  persist(
    (set) => ({
      list: [],
      addMemo(newMemo) {
        set((state) => {
          const hasMemo = state.list.some((memo) => memo.id === newMemo.id);
          if (hasMemo) return state;
          return {
            ...state,
            list: [...state.list, newMemo],
          };
        });
      },
      updateMemo(updatedMemo) {
        set((state) => {
          const memoIndex = state.list.findIndex(
            (memo) => memo.id === updatedMemo.id
          );
          if (memoIndex === -1) return state;
          const newList = [...state.list];
          newList[memoIndex] = updatedMemo;
          return {
            ...state,
            list: newList,
          };
        });
      },
      deleteMemo(memoId) {
        set((state) => {
          return {
            ...state,
            list: state.list.filter((memo) => memo.id !== memoId),
          };
        });
      },
    }),
    {
      name: MEMO_STORAGE_KEY,
    }
  )
);

const useMemoStoreSelector = createSelectors(useMemoStoreBase);

export default useMemoStoreSelector;
