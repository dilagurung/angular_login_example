import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService
{

    constructor(private http: Http) { }

    login(username: string, password: string)
    {
        var headerss=new Headers();
        console.log('hello login');
        headerss.append("Content-Type","application/json");
        headerss.append("Authorization","JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbGEuZ3VydW5nQGdtYWlsLmNvbSIsImlhdCI6MTUwMTk0ODExMSwiZXhwIjoxNTAxOTQ5OTExfQ.TV-8IPv0lXTgHwtpnCL4txiv48foRQEPMNPC4OnZ6Vk");
        //return this.http.post('http://192.168.0.102:8080/api/job',{headers:this.headers}).map();

         return this.http.get('http://138.197.1.51:8000/api/organization',{headers: headerss}).map(res => {console.log(res.json())});

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}