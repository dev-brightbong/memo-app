export interface MemoType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type MemoStoreType = {
  list: MemoType[];
  addMemo: (memo: MemoType) => void;
  updateMemo: (memo: MemoType) => void;
  deleteMemo: (id: string) => void;
};
