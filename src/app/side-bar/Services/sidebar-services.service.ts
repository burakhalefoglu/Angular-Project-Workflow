import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SideElements } from '../SideElements';



@Injectable()
export class SidebarServicesService {

  path ="http://localhost:3000/Side"
  constructor(private http:HttpClient) {}

  getSideElements():Observable<SideElements[]>{
    return this.http.get<SideElements[]>(this.path)
 }

}
