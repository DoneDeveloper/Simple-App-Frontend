import { HttpHeaders } from "@angular/common/http";

export const HttpOptions = 
{
    headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
    }),
    withCredentials: true,
    responseType : 'json'
}