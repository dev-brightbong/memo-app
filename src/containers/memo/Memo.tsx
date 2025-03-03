import { Box, Grid } from "@chakra-ui/react";
import CreateButton from "@/containers/memo/components/CreateButton";
import PostIt from "@/components/PostIt/PostIt";
import useMemoHook from "./hooks/useMemoHook";

const Memo = () => {
  const { columns, list, modals } = useMemoHook();

  return (
    <Grid mt="32px" templateColumns={`repeat(${columns}, 1fr)`} rowGap="32px">
      {list.map((item) => {
        const { id, bgColor, title, content, createdAt, updatedAt } = item;
        return (
          <Box key={`postit-${id}`}>
            {id === "new" ? (
              <PostIt.Card
                bgColor={bgColor}
                title={title}
                content={content}
                hasEdit={false}
                onClick={() => {
                  modals.onOpenCreateModal();
                }}
              >
                <CreateButton />
              </PostIt.Card>
            ) : (
              <PostIt.Card
                bgColor={bgColor}
                title={title}
                content={content}
                createdAt={createdAt}
                updatedAt={updatedAt}
                onClick={() => {
                  modals.onOpenDetailModal({
                    title,
                    content,
                  });
                }}
                onUpdate={() => {
                  modals.onOpenUpdateModal({
                    initialTitle: title,
                    initialContent: content,
                    id,
                  });
                }}
                onDelete={() => {
                  modals.onOpenDeleteModal(id);
                }}
              />
            )}
          </Box>
        );
      })}
    </Grid>
  );
};

export default Memo;
