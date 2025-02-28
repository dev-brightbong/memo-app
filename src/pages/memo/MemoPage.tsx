import { Box } from "@chakra-ui/react";
import useMemoHandler from "@/stores/memo/useMemoHandler";
import { getCurrentTime } from "@/utils/utils";
import { Button } from "@/components/ui/Button";
import Text from "@/components/ui/Text";

const MemoPage = () => {
  const { list, addMemo, deleteMemo, updateMemo } = useMemoHandler();

  console.log(list);
  return (
    <Box>
      <Text>메모 제목</Text>
      <Text textStyle="title">메모 내용</Text>

      <Button
        onClick={() =>
          addMemo({
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
          updateMemo({
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
      <Button onClick={() => deleteMemo("1")}>삭제</Button>
    </Box>
  );
};

export default MemoPage;
