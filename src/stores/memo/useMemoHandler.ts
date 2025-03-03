import { MemoType } from "./memo.type";
import useMemoState from "./useMemoState";

export type UseMemoHandlerProps = ReturnType<typeof useMemoState>;

const useMemoHandler = ({
  list,
  addMemo,
  updateMemo,
  deleteMemo,
}: UseMemoHandlerProps) => {
  const onAddMemo = (newMemo: MemoType) => {
    addMemo(newMemo);
  };

  const onUpdateMemo = (updatedMemo: Partial<MemoType>) => {
    updateMemo(updatedMemo);
  };

  const onDeleteMemo = (memoId: string) => {
    deleteMemo(memoId);
  };

  return { list, onAddMemo, onUpdateMemo, onDeleteMemo };
};

export default useMemoHandler;
