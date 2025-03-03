import useMemoState from "./useMemoState";
import useMemoHandler from "./useMemoHandler";

/**
 * @title 메모 스토어
 * @description 메모 상태와 핸들러를 관리합니다.
 * 컴포넌트에서 메모의 상태에 접근할때 사용하는 훅 입니다.
 */
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
