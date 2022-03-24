import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccoutService } from '../_services/accout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountServie: AccoutService) { }

  ngOnInit(): void {

  }

  login() {
    this.accountServie.login(this.model).subscribe(response => {console.log(response);}, error => console.log(error))
  }

  logout() {
    this.accountServie.logout();
  }

}
