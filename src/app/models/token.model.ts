export class Token {
    constructor(
        public access_token: string,
        public refresh_token: string,
        public expires_in: string,
        public firstName: string,
        public roles: string,
        public secondSurname: string,
        public firstSurname: string,
        public email: string,
        public username: string
    ) { }
}