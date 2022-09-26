import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.findAllUser().subscribe((users) => {
      console.log({ users });
    });
  }
}
