import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent{

  user: any
}
