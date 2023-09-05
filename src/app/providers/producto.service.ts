import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  private URL: string = "https://express-production-1fdc.up.railway.app/rest/producto/findAll/json";

  getResponse() {
    return this.http.get(this.URL);
  }
}
