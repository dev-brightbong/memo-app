import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  memoTitle: {
    description: "메모 제목 스타일 - 목록 및 상세 페이지의 메모 제목",
    value: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "30px",
    },
  },
  memoContent: {
    description: "메모 내용 스타일 - 메모 본문 텍스트",
    value: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
  dateText: {
    description: "날짜 텍스트 스타일 - 메모 생성/수정 날짜 표시",
    value: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  buttonText: {
    description: "버튼 텍스트 스타일 - 추가/수정/삭제 등 버튼 텍스트",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  statusText: {
    description: "상태 텍스트 스타일 - 성공/오류 메시지 및 안내 텍스트",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
});

export default textStyles;
