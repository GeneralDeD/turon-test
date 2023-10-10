export const objToQuery = (obj: { [key: string]: any }) => {
  return "?" + new URLSearchParams(obj).toString();
};
