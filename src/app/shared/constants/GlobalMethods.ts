export class GlobalMethods {
    
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