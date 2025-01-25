
const devUrl = 'http://localhost:4000/';

export const BASE_URL = devUrl

export const AppRoutes = {
    signup: BASE_URL + "auth/register",
    login: BASE_URL + "auth/login",
}


export const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dd2alel5h/image/upload';
export const CLOUDINARY_CLOUD_NAME = 'dd2alel5h';
export const CLOUDINARY_UPLOAD_PRESET = 'Saylani';