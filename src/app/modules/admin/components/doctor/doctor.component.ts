import { Component } from '@angular/core';
import { DoctorCardComponent } from '../../../shared/cards/doctor-card/doctor-card.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [DoctorCardComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {

}
