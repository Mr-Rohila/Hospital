import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  redirect = setTimeout(() => {
    const token = this.authService.getToken()
    var url = localStorage.getItem('redirectURL');
    if (url && token)
      this.router.navigate([url]);
  }, 2000);
}
