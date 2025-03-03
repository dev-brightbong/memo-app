import dayjs from "dayjs";
import { PostItProps } from "@/components/PostIt/PostIt";

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
  return text.length < minLength;
};

/**
 * @description 현재 시간 반환 함수
 */
export const getCurrentTime = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * @description 포스트잇의 배경색을 랜덤으로 반환하는 함수
 */
export const getRandomPostItColor = (): PostItProps["bgColor"] => {
  const colors: PostItProps["bgColor"][] = [
    "colors.common.yellow",
    "colors.common.green",
    "colors.common.red",
    "colors.common.blue",
    "colors.common.purple",
    "colors.common.orange",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
