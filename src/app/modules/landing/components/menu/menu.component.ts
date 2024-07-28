import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass,RouterLink,MatButtonModule,MatDividerModule,MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  signInWithGoogle() {
  }
}
