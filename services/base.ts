const SECRET_TOKEN = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export const headerInterceptor = {
  "secret-token": SECRET_TOKEN ?? "",
};
