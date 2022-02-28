import { ToastrService } from 'ngx-toastr';
import { AcccountService } from './../_services/acccount.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter()
  model: any ={};

  constructor(private accountservice :AcccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  register(){
    this.accountservice.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel(){
     this.cancelRegister.emit(false);
  }
}
