import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductServicesService {

  path = "http://localhost:3000/Product"
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path)
  }
}
