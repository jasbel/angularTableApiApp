import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonComponent } from './person.component';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PersonListComponent, PersonComponent],
  imports: [CommonModule, PersonRoutingModule],
})
export class PersonModule {}
