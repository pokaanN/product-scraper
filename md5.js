
import CryptoJS from "crypto-js";

export function createMD5(text) {
return CryptoJS.MD5(text).toString();
}
