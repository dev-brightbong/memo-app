export const validateTitle = (title: string) => {
  if (title.trim() === "") {
    return {
      isValid: false,
      message: "제목을 입력해주세요.",
    };
  }
  return { isValid: true, message: "" };
};

export const validateContent = (content: string) => {
  if (content.trim() === "") {
    return {
      isValid: false,
      message: "내용을 입력해주세요.",
    };
  }

  if (content.trim().length < 10) {
    return {
      isValid: false,
      message: "내용은 최소 10자 이상 입력해주세요.",
    };
  }

  return { isValid: true, message: "" };
};
