import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
   authService=inject(AuthService);
   token:string='temp';
   user:any=null;
  ngOnInit(): void {
    this.token=this.authService.getToken();
    this.user=this.authService.getProfile();
  }

}
