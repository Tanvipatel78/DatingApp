import { AcccountService } from './../_services/acccount.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public acccountService: AcccountService, private  router: Router ,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.acccountService.login(this.model).subscribe(response =>  {
    this.router.navigateByUrl('/members');
    },error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  logout()
  {
    this.acccountService.logout();
    this.router.navigateByUrl('/');
  }

}
