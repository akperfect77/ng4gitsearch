import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = '059355e66e8e5e9ba258';
    private client_secret = 'd9bfb85d5df880cee20eb5bff3c676c30a21d142';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'akperfect77';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}