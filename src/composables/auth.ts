import { useCookies } from "@vueuse/integrations/useCookies";
const adminToken = 'admin-token';
const cookies = useCookies();

//获取token
export function getToken() {
    return cookies.get(adminToken);
}

//设置token
export function setToken(token: string) {
    cookies.set(adminToken, token, {expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}); // 设置cookie过期时间为7天
}


//清除token
export function removeToken() {
    cookies.remove(adminToken);
}