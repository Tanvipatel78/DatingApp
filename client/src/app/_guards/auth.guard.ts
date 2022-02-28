import { ToastrService } from 'ngx-toastr';
import { AcccountService } from './../_services/acccount.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountservice: AcccountService,private toastr: ToastrService) {}

  canActivate(): Observable<boolean> {
    return this.accountservice.currentUser$.pipe(
      map(user => {
        if(user) return true;
        this.toastr.error('You shall not pass!')
      })
    )
  }

}
