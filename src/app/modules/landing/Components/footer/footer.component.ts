import { Component } from '@angular/core';
import { HasRolesDirective } from '../../../shared/Directive/has-roles.directive';
import { Roles } from '../../../shared/Model/Roles';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HasRolesDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  roles = Roles;

}
