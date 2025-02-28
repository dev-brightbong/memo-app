import { Outlet } from "react-router-dom";
import { Box, BoxProps } from "@chakra-ui/react";

export interface DefaultLayoutProps extends BoxProps {}

const DefaultLayout = ({ ...props }: DefaultLayoutProps) => {
  return (
    <Box as="main" role="main" aria-label="Main Content area">
      <Box
        as="section"
        role="section"
        aria-label="Section Content area"
        maxWidth="1200px"
        margin="0 auto"
        padding={"20px"}
        minHeight="100vh"
        {...props}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
