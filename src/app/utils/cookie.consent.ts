export class CookieConsent {

    public static getCookie(name: string): string {
        let cookie: string = document.cookie
        if (cookie) {
            let cookies: Array<string> = cookie.trim().split(';');
            for (let cookie of cookies) {
                let keyValue = cookie.split("=")
                let key = keyValue[0].trim()
                let value = keyValue[1].trim()
                if (key == name) {
                    return value
                }
            }
        }
        return ''
    }

    public static deleteCookie(name: string): void {
        this.setCookie(name, '', -1);
    }

    public static setCookie(name: string, value: string, expireDays: number, path: string = ''): void {
        let date: Date = new Date();
        date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires: string = `expires=${date.toUTCString()}`;
        let cookiePath: string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cookiePath}`;
    }

}