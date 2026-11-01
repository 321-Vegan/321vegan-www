export const IS_DEVMODE = process.env.NODE_ENV === "development";

export const API_URL = process.env.BACKEND_API_URL;

// Bucket of the restaurant photos and selection covers
export const S3_STORAGE_URL = process.env.VITE_S3_STORAGE_URL

export const ALTCHA_SECRET =
  process.env.ALTCHA_SECRET ??
  "a very long string to be used to generate an hmackey used by altcha captcha";
