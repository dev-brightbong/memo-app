import useMemoStoreSelector from "./memoStoreBase";

const useMemoState = () => {
  const list = useMemoStoreSelector.use.list();
  const addMemo = useMemoStoreSelector.use.addMemo();
  const updateMemo = useMemoStoreSelector.use.updateMemo();
  const deleteMemo = useMemoStoreSelector.use.deleteMemo();

  return {
    list,
    addMemo,
    updateMemo,
    deleteMemo,
  };
};

export default useMemoState;
