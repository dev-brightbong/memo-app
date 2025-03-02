import { Grid } from "@chakra-ui/react";
import PostIt from "@/components/PostIt/PostIt";
import CreateButton from "@/containers/memo/components/CreateButton/CreateButton";
import { DETAIL_MODAL, useContextModal } from "@/providers/modal/ModalProvider";
import useMemoHook from "./hooks/useMemoHook";

const Memo = () => {
  const { columns } = useMemoHook();
  const { openModal, closeModal } = useContextModal();

  const onClickDetail = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    openModal(DETAIL_MODAL, {
      title,
      content,
      open: true,
      onClose: () => {
        closeModal();
      },
    });
  };

  return (
    <>
      <CreateButton />
      <Grid templateColumns={`repeat(${columns}, 1fr)`} rowGap="32px">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <PostIt.Card
              bgColor={"colors.common.yellow"}
              title={`제목 ${index}`}
              content={`내용 ${index}`}
              onClick={() =>
                onClickDetail({
                  title: `제목 ${index}`,
                  content: `내용 ${index}`,
                })
              }
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Memo;
