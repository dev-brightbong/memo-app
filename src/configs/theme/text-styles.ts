import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  title: {
    value: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "1.1",
    },
  },
  content: {
    value: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.1",
    },
  },
  date: {
    value: {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "1.1",
    },
  },
  button: {
    value: {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "1.1",
    },
  },
});

export default textStyles;
