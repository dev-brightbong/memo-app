import { Grid } from "@chakra-ui/react";
import PostIt from "@/components/PostIt/PostIt";
import { getRandomPostItColor } from "@/utils/utils";
import useMemoHook from "./hooks/useMemoHook";

const Memo = () => {
  const { columns } = useMemoHook();

  return (
    <>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} rowGap="32px">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <PostIt
              bgColor={getRandomPostItColor()}
              title={`제목 ${index}`}
              content={`내용 ${index}`}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Memo;
