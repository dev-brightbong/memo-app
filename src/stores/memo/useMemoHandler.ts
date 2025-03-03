import { MemoType } from "./memo";
import useMemoState from "./useMemoState";

export type UseMemoHandlerProps = ReturnType<typeof useMemoState>;

/**
 * @title 메모 핸들러
 * @description 메모 상태를 변경하는 함수를 관리합니다.
 * 상태변경은 핸들러를 통해서만 이루어지도록 합니다.
 */
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
