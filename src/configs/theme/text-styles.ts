import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  title: {
    value: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "30px",
    },
  },
  content: {
    value: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
  date: {
    value: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  button: {
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
  status: {
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
});

export default textStyles;
