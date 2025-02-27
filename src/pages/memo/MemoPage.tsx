import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import useMemoStoreHandler from "@/stores/memo/useMemoStoreHandler";
import { getCurrentTime } from "@/utils/utils";

const MemoPage = () => {
  const { list, addMemo, deleteMemo, updateMemo } = useMemoStoreHandler();

  console.log(list);
  return (
    <Box>
      <Text textStyle="title">메모 제목</Text>
      <Text textStyle="content">메모 내용</Text>

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
