import { Adapter} from '../adapter/Adapter';
import { UserModel } from '../../models/userModel';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UserAdapter implements Adapter<UserModel> {
    adapt(apiUserModel: any): UserModel {
       return new UserModel(
           apiUserModel.login,
           apiUserModel.url
       )
    }
}
