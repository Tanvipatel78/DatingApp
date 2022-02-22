import { AcccountService } from './_services/acccount.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private AcccountService: AcccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.AcccountService.setCurrentUser(user);
  }

}
