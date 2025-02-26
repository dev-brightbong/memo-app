/**
 * @description 빈 문자열 검사 함수
 */
export const hasEmptyText = (text: string) => {
  return text.trim() === "";
};

/**
 * @description 최소 길이 검사 함수
 */
export const needMinLength = (text: string, minLength: number) => {
  return text.length >= minLength;
};
