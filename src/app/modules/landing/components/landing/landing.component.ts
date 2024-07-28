import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}