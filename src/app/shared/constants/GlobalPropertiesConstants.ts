export class GlobalPropertiesConstants {

    public static LS_THEME: string = "theme";
    public static PROPERTY_HREF: string = "href";
    public static PROPERTY_TOKEN: string = "token";
    public static CONTENT_TYPE_HEADER: string = "Content-Type";
    public static AUTH_HEADER: string = "Authorization";
    public static URL_ENCODED_HEADER_VALUE: string = "application/x-www-form-urlencoded";
    public static AUTH_BEARER_VALUE: string = "Bearer";
    public static AUTH_BASIC_VALUE: string = "Basic";
    public static USERNAME_HTTP_PARAM: string = "username";
    public static PASSWORD_HTTP_PARAM: string = "password";
    public static GRANT_TYPE_HTTP_PARAM: string = "grant_type";
    public static GRANT_TYPE_HTTP_PARAM_VALUE: string = "password";
    public static CLIENT_ID: string = "client-id";
    public static SAK: string = "$2a$10$3sbj9nu8uw6vb6M2FLZht.VQK6XcmTu4.jmanAaAJGBQP/bhUsHOS";


    /**
     * https://www.codegrepper.com/code-examples/javascript/javascript+check+if+string+is+json+parsable
     * @param str 
     * @returns 
     */
    static isJsonParseable(str: string) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}