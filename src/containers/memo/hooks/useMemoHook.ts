import { useBreakpointValue } from "@chakra-ui/react";

const useMemoHook = () => {
  const columns = useBreakpointValue(
    { base: 1, md: 3, lg: 4 },
    { ssr: typeof window === "undefined" }
  );

  return {
    columns,
  };
};

export default useMemoHook;
