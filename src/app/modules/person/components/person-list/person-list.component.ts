import { Component, OnInit } from '@angular/core';
import { PersonInfoModel } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styles: [],
})
export class PersonListComponent implements OnInit {
  people: PersonInfoModel[] = [];
  loading: boolean = false;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this.personService.findAll().subscribe((resp) => {
      this.loading = false;
      this.people = resp?.data || [
        { id: 'probando', attributes: { name: 'nombre', phone: '' } },
      ];
      console.log({ resp });
    });
  }
}
