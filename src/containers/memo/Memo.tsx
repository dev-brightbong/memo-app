import React from "react";
import PostIt from "@/components/ui/PostIt";
import { Grid, useBreakpointValue } from "@chakra-ui/react";

const Memo = () => {
  const columns = useBreakpointValue(
    { base: 1, md: 3, lg: 4 },
    { ssr: typeof window === "undefined" }
  );

  return (
    <>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} rowGap="32px">
        <PostIt
          bgColor="colors.common.yellow"
          title="노란색 제목"
          content="노란색 내용"
        />
        <PostIt
          bgColor="colors.common.green"
          title="녹색 제목"
          content="녹색 내용"
        />
        <PostIt
          bgColor="colors.common.red"
          title="빨간색 제목"
          content="빨간색 내용"
        />
        <PostIt
          bgColor="colors.common.orange"
          title="주황색 제목"
          content="주황색 내용"
        />
        <PostIt
          bgColor="colors.common.blue"
          title="파란색 제목"
          content="파란색 내용"
        />
        <PostIt
          bgColor="colors.common.purple"
          title="보라색 제목"
          content="보라색 내용"
        />
        <PostIt
          bgColor="colors.common.blue"
          title="파란색 제목"
          content="파란색 내용"
        />
        <PostIt
          bgColor="colors.common.purple"
          title="보라색 제목"
          content="보라색 내용"
        />
      </Grid>
    </>
  );
};

export default Memo;
