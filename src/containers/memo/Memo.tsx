import { Grid, VStack } from "@chakra-ui/react";
import CreateButton from "@/containers/memo/components/CreateButton/CreateButton";
import PostIt from "@/components/PostIt/PostIt";
import Text from "@/components/Text/Text";
import useMemoHook from "./hooks/useMemoHook";

const Memo = () => {
  const { columns, list, onOpenDetailModal } = useMemoHook();

  return (
    <>
      <CreateButton />

      <VStack my="16px" justifyContent="center" alignItems="center">
        <Text textStyle="1xl">
          우측 하단의 플러스버튼을 누르면 메모를 작성하실 수 있어요 :)
        </Text>
        <Text textStyle="2xl">메모 목록</Text>
      </VStack>

      <Grid templateColumns={`repeat(${columns}, 1fr)`} rowGap="32px">
        {list.map((item) => {
          const { id, bgColor, title, content, createdAt, updatedAt } = item;
          return (
            <PostIt.Card
              key={`postit-${id}`}
              bgColor={bgColor}
              title={title}
              content={content}
              createdAt={createdAt}
              updatedAt={updatedAt}
              onClick={() => {
                onOpenDetailModal({
                  title,
                  content,
                });
              }}
              onUpdate={() => {
                console.log("update");
              }}
              onDelete={() => {
                console.log("delete");
              }}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Memo;
