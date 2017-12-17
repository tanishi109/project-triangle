export const isDev = process.env.NODE_ENV !== "production";
export const endpoint = isDev ? "0.0.0.0:4000" : "35.194.165.28";
