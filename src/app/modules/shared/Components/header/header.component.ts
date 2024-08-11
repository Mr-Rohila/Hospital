import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../authorization/Services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authService = inject(AuthService);
  initLogout() {
    this.authService.logout();
  }
}
