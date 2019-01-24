import { Injectable } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { studentModel } from '../dashboard/student-list/student.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerResolveService implements Resolve<studentModel> {

  constructor(
      private dataServiceSerice: DataServiceService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any{
        return this.dataServiceSerice.getStudent();        
    } 
}
