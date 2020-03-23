import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAdapter } from '../Adapter/user.Adapter';
import { UserModel } from 'src/app/models/userModel';
import { AppConfigService } from './app-config.service';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  configData: any = null;
  constructor(private http: HttpClient, private userAdapter : UserAdapter, private configService : AppConfigService) { 
    this.configData = this.configService.getConfig();
  }
  public getUsers(searchText): Observable<UserModel[]> {
    return this.http.get(this.configData.gitHubApi.searchUsers + searchText)
      .pipe(
        map((data: any) => {
          if (data && data.total_count>0) {
          return data.items.map(item => this.userAdapter.adapt(item));
          }
          else
          {
          
          }
        })        
      );
  }
}
