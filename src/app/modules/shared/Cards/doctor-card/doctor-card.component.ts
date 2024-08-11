import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss'
})
export class DoctorCardComponent {

}
