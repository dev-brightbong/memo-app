import useMemoStoreSelector from "./useMemoStoreSelector";

/**
 * @title 메모 상태
 * @description 메모 상태를 관리합니다.
 */

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
