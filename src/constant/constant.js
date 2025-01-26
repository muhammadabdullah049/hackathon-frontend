const devUrl = "http://localhost:4000/";

export const BASE_URL = devUrl;

export const AppRoutes = {
  signup: BASE_URL + "auth/register",
  login: BASE_URL + "auth/login",
  loanCategories: BASE_URL + "loan/loan-categories",
  subLoanCategories: BASE_URL + "sub-loan/sub-categories",
};

export const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dd2alel5h/image/upload";
export const CLOUDINARY_CLOUD_NAME = "dd2alel5h";
export const CLOUDINARY_UPLOAD_PRESET = "Saylani";
