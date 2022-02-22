import { AcccountService } from './../_services/acccount.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../_models/user';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  constructor(public acccountService: AcccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.acccountService.login(this.model).subscribe(response =>  {
    console.log(response);
    },error => {
      console.log(error);
    })
  }

  logout()
  {
    this.acccountService.logout();
  }

}
