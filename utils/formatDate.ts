import { MONTHS } from "@/consts";

export const formatDate = (dateString: number) => {
  const date = new Date(dateString * 1000);
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};
