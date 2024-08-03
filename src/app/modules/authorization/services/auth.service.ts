import { Injectable } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Users } from '../../shared/model/Users';
import { Roles } from '../../shared/model/Roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }

  getLoginUser(): Users | null {
    return {
      username: 'ankush',
      roles: [Roles.SUPERADMIN]
    }
  }

  isLogin(): boolean {
    return this.getLoginUser() != null;
  }

}
