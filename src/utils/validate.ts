import { hasEmptyText, needMinLength } from "./utils";

export const validateTitle = (title: string) => {
  if (hasEmptyText(title)) {
    return {
      isValid: false,
      message: "제목을 입력해주세요.",
    };
  }
  return { isValid: true, message: "" };
};

export const validateContent = (content: string) => {
  if (hasEmptyText(content)) {
    return {
      isValid: false,
      message: "내용을 입력해주세요.",
    };
  }

  if (needMinLength(content, 10)) {
    return {
      isValid: false,
      message: "내용은 최소 10자 이상 입력해주세요.",
    };
  }

  return { isValid: true, message: "" };
};
