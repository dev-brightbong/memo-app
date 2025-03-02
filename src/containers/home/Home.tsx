import { Center, Image } from "@chakra-ui/react";
import { Button } from "@/components/Button/Button";
import Text from "@/components/Text/Text";

import backgroundImage from "@/assets/png/background.png";
import useHome from "./hooks/useHome";

const Home = () => {
  const { onNavigateMemoPage } = useHome();
  return (
    <Center flexDirection="column" gap={2}>
      <Text fontSize={{ base: "40px", md: "80px" }}>Memo App</Text>
      <Button onClick={onNavigateMemoPage}>시작하기</Button>
      <Image src={backgroundImage} alt="logo" />
    </Center>
  );
};

export default Home;
