import useMemoState from "./useMemoState";
import useMemoHandler from "./useMemoHandler";

const useMemoStore = () => {
  const { list, addMemo, updateMemo, deleteMemo } = useMemoState();
  const { onAddMemo, onUpdateMemo, onDeleteMemo } = useMemoHandler({
    list,
    addMemo,
    updateMemo,
    deleteMemo,
  });

  return {
    list,
    onAddMemo,
    onUpdateMemo,
    onDeleteMemo,
  };
};

export default useMemoStore;
