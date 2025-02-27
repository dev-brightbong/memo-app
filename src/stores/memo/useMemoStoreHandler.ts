import { createBoundedUseStore } from "../helper/create-bounded-store";
import { createMemoStore } from "./memo-store";

const memoStore = createBoundedUseStore(createMemoStore);

const useMemoStoreHandler = () => {
  const list = memoStore((selector) => selector.list);
  const addMemo = memoStore((selector) => selector.addMemo);
  const updateMemo = memoStore((selector) => selector.updateMemo);
  const deleteMemo = memoStore((selector) => selector.deleteMemo);

  return { list, addMemo, updateMemo, deleteMemo };
};

export default useMemoStoreHandler;
