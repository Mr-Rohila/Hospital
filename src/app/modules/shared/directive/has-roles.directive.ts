import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Roles } from '../model/Roles';
import { Users } from '../model/Users';
import { AuthService } from '../../authorization/services/auth.service';

@Directive({
  selector: '[hasRoles]',
  standalone: true
})
export class HasRolesDirective implements OnChanges {


  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef,
    private auth: AuthService) { }

  private visible: boolean;

  private roles: Roles[];
  private loginUser: Users | null;


  @Input() set hasRoles(roles: Roles[]) {
    this.roles = roles;
  }

  ngOnChanges(): void {
    this.loginUser = this.auth.getLoginUser();
    if (!this.roles?.length || !this.loginUser) {
      return;
    }

    if (this.visible) {
      return;
    }

    // check if user roles include at least one of the input roles
    if (this.loginUser.roles.some(role => this.roles.includes(role))) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
      return;
    }

    this.viewContainer.clear();
    this.visible = false;
  }
}
