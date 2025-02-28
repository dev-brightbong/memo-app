import { Box } from "@chakra-ui/react";
import { getCurrentTime } from "@/utils/utils";
import { Button } from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Memo from "@/containers/Memo/Memo";
import useMemoStore from "@/stores/memo/useMemoStore";

const MemoPage = () => {
  const { list, onAddMemo, onUpdateMemo, onDeleteMemo } = useMemoStore();

  console.log(list);
  return (
    <Box>
      <Memo />

      <Text>메모 제목</Text>
      <Text textStyle="title">메모 내용</Text>

      <Button
        onClick={() =>
          onAddMemo({
            id: "1",
            title: "test",
            content: "test",
            createdAt: getCurrentTime(new Date()),
            updatedAt: getCurrentTime(new Date()),
          })
        }
      >
        추가
      </Button>
      <Button
        onClick={() =>
          onUpdateMemo({
            id: "1",
            title: "title update",
            content: "content update",
            createdAt: getCurrentTime(new Date()),
            updatedAt: getCurrentTime(new Date()),
          })
        }
      >
        수정
      </Button>
      <Button onClick={() => onDeleteMemo("1")}>삭제</Button>
    </Box>
  );
};

export default MemoPage;
