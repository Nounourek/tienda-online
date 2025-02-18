import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditServiceService {
  private isOpenSubject= new BehaviorSubject<boolean>(false);
  isOpen$=this.isOpenSubject.asObservable();

 status$:Observable<boolean>=this.isOpenSubject.asObservable();

  constructor() { }

  changeEditStatus(status:boolean):void{
    this.isOpenSubject.next(status);
  }
}
