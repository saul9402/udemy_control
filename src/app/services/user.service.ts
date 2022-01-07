import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
//Tap es un "paso" aidicional para el observable
import { tap } from "rxjs/operators";
import { GlobalPropertiesConstants } from '../shared/constants/GlobalPropertiesConstants';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Token } from '../models/token.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly BASE_URL_AUTHENTICATION: string = `${base_url}/authentication`;
  readonly BASE_URL_USERS: string = `${base_url}/users/users`;

  constructor(private http: HttpClient, private router: Router) { }


  /**
   * https://www.instintoprogramador.com.mx/2020/10/javascript-async-await-con-angular-78.html
   * https://www.telerik.com/blogs/angular-basic-what-are-promises-async-await-why-should-you-care
   * @returns 
   */
  async validateToken() {
    const isTokenValid = await this.http.get(`${this.BASE_URL_USERS}/validate-token`)
      .toPromise()
      .catch(m => {
        localStorage.removeItem(GlobalPropertiesConstants.PROPERTY_TOKEN);
        this.router.navigate(["/login"]);
        Swal.fire('Error con el token', m, 'error');
      });
    return isTokenValid;
  }

  createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/user`, formData);
  }


  login(formData: LoginForm) {
    const payload = this.getValuesAsURLSearchParams(formData);
    let headers = this.getAuthenticationHeaders();
    return this.http.post(`${this.BASE_URL_AUTHENTICATION}/oauth/token`, payload.toString(), { headers })
      .pipe(tap((resp: Token) => {
        localStorage.setItem(GlobalPropertiesConstants.PROPERTY_TOKEN, JSON.stringify(resp));
        this.router.navigateByUrl('/');
        //TODO: Agregar alguna funcion que cuando termine el tiempo del token avise al usuario o bien aga un refresh del token
      })
      );
  }

  private getAuthenticationHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append(GlobalPropertiesConstants.CONTENT_TYPE_HEADER, GlobalPropertiesConstants.URL_ENCODED_HEADER_VALUE);
    headers = headers.append(GlobalPropertiesConstants.AUTH_HEADER,
      `${GlobalPropertiesConstants.AUTH_BASIC_VALUE} ${btoa(`${GlobalPropertiesConstants.CLIENT_ID}:${GlobalPropertiesConstants.SAK}`)}`);
    return headers;
  }

  /**
   * Es posible hacer el envio de parametros con HttpParams o con URLSearchParams pero 
   * si se hace con este ultimo se debe agregar el toString() al
   * enviar el payload y se debe agregar el header de conten-type
   * con el valor de "application/x-www-form-urlencoded".
   * 
   * https://stackoverflow.com/questions/39863317/how-to-force-angular2-to-post-using-x-www-form-urlencoded/45962083
   * */
  private getValuesAsURLSearchParams(formData: LoginForm) {
    const payload = new URLSearchParams();
    payload.set(GlobalPropertiesConstants.USERNAME_HTTP_PARAM, formData.username);
    payload.set(GlobalPropertiesConstants.PASSWORD_HTTP_PARAM, formData.password);
    payload.set(GlobalPropertiesConstants.GRANT_TYPE_HTTP_PARAM, GlobalPropertiesConstants.GRANT_TYPE_HTTP_PARAM_VALUE);
    return payload;
  }

  /**
   * Es posible hacer el envio de parametros con HttpParams o con URLSearchParams pero 
   * si se hace con este ultimo se debe agregar el toString() al
   * enviar el payload y se debe agregar el header de conten-type
   * con el valor de "application/x-www-form-urlencoded".
   * 
   * https://www.it-swarm-es.com/es/angular/httpclient-post-solicitud-utilizando-x-www-form-urlencoded/833911932/
   * */
  private getValuesAsHttpParams(formData: LoginForm) {
    let payload = new HttpParams();
    payload = payload.set(GlobalPropertiesConstants.USERNAME_HTTP_PARAM, formData.username);
    payload = payload.set(GlobalPropertiesConstants.PASSWORD_HTTP_PARAM, formData.password);
    payload = payload.set(GlobalPropertiesConstants.GRANT_TYPE_HTTP_PARAM, GlobalPropertiesConstants.GRANT_TYPE_HTTP_PARAM_VALUE);
    return payload;
  }

  logout() {
    localStorage.removeItem(GlobalPropertiesConstants.PROPERTY_TOKEN);
    this.router.navigateByUrl('/login');
  }
}
