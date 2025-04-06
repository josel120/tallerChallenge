import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = "http://localhost:8000";
  items = [];
  constructor( private http: HttpClient) {
    
   }

  getProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }
  
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }
}
