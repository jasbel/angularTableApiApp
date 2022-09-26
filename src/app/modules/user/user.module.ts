import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
