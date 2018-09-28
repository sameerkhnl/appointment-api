import {HttpClient, HttpParams} from '@angular/common/http';
import {UserModel} from './user.model';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  fetchUsers(){
    let options = {params: new HttpParams().set('providerEmail', 'sss@example.com')}
    return this.http.get<UserModel[]>('api/User', options);
  }

}
