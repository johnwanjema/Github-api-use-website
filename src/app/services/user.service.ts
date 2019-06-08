import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;


  userInformation() {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
      bio: string;
      repo: string;
    }
    const promise = new Promise((resolve, reject) => {
      var link = "https://api.github.com/users/johnwanjema?access_token=08edb51ce3815631749b038817d1a44fb20cecd3";

      this.http.get<ApiResponse>(link).toPromise().then(
        (response) => {
          this.user.name = response.login;
          this.user.id = response.id;
          this.user.avatar_url = response.avatar_url;
          this.user.bio = response.bio;
          this.user.repos_url = response.repo;

          resolve();


          console.log(response.login);
        },
        (error) => {
          alert('error');
          reject(error);
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient) {
    this.user = new User('', 0, '', '', '', '', '');
  }
}



