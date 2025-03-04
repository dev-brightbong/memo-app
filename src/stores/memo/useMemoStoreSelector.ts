import { create } from "zustand";
import { MemoStoreType, MemoType } from "./memo";
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
      addMemo: (newMemo) => {
        set((state) => {
          if (state.list.some((memo) => memo.id === newMemo.id)) return state;
          return updateList(state, [newMemo, ...state.list]);
        });
      },
      updateMemo(updatedMemo) {
        set((state) => {
          const memoIndex = state.list.findIndex(
            (memo) => memo.id === updatedMemo.id
          );
          if (memoIndex === -1) return state;
          const newList = [...state.list];
          newList[memoIndex] = { ...newList[memoIndex], ...updatedMemo };
          return updateList(state, newList);
        });
      },
      deleteMemo: (memoId) => {
        set((state) =>
          updateList(
            state,
            state.list.filter((memo) => memo.id !== memoId)
          )
        );
      },
    }),
    {
      name: MEMO_STORAGE_KEY,
    }
  )
);

const updateList = (state: MemoStoreType, newList: MemoType[]) => ({
  ...state,
  list: newList,
});

const useMemoStoreSelector = createSelectors(useMemoStoreBase);

export default useMemoStoreSelector;
