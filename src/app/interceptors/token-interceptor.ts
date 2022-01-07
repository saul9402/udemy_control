import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Token } from "../models/token.model";
import { GlobalPropertiesConstants } from "../shared/constants/GlobalPropertiesConstants";

/**
 * https://medium.com/angular-shots/shot-3-how-to-add-http-headers-to-every-request-in-angular-fab3d10edc26
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenFromLocalStorage: string = localStorage.getItem(GlobalPropertiesConstants.PROPERTY_TOKEN) || '';

        let token: Token;
        let modifiedRequest;
        /**
         * https://stackoverflow.com/questions/34597835/how-to-get-current-route
         */
        if (this.router.url == "/login" && (!tokenFromLocalStorage || tokenFromLocalStorage == '')) {
            modifiedRequest = req.clone();
        } else if (GlobalPropertiesConstants.isJsonParseable(tokenFromLocalStorage)) {
            token = JSON.parse(tokenFromLocalStorage);
            modifiedRequest = token && token.access_token !== '' ?
                req.clone({
                    headers: req.headers.set(GlobalPropertiesConstants.AUTH_HEADER, `${GlobalPropertiesConstants.AUTH_BEARER_VALUE} ${token.access_token}`),
                }) : req.clone();
        } else {
            localStorage.removeItem(GlobalPropertiesConstants.PROPERTY_TOKEN)
            this.router.navigate(["/login"]);
            /**
             * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw
             */
            throw "invalid-token";
        }

        return next.handle(modifiedRequest);
    }
}