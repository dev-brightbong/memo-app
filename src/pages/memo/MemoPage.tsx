import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useMemoStore } from "@/stores/memo/memo-store";

const MemoPage = () => {
  const { list, addMemo } = useMemoStore();

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
            createdAt: "2024-01-01",
            updatedAt: "2024-01-01",
          })
        }
      >
        추가
      </Button>
    </Box>
  );
};

export default MemoPage;
