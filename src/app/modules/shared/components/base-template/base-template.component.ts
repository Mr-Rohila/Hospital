import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-base-template',
  standalone: true,
  imports: [NgClass, RouterOutlet, HeaderComponent, SideMenuComponent],
  templateUrl: './base-template.component.html',
  styleUrl: './base-template.component.scss'
})
export class BaseTemplateComponent {

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar)
      sidebar.classList.toggle('show');
  }
}
