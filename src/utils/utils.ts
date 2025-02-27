import dayjs from "dayjs";

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

/**
 * @description 현재 시간 반환 함수
 */
export const getCurrentTime = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};
