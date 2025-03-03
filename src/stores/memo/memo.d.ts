import { PostItProps } from "@/components/PostIt/PostIt";

export interface MemoType {
  id: string;
  title: string;
  content: string;
  bgColor: PostItProps["bgColor"];
  createdAt: string;
  updatedAt: string;
}

export type MemoStoreType = {
  list: MemoType[];
  addMemo: (memo: MemoType) => void;
  updateMemo: (memo: Partial<MemoType>) => void;
  deleteMemo: (id: string) => void;
};
