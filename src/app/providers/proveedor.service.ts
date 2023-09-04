import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }
  private URL: string = "https://express-production-1fdc.up.railway.app/rest/cliente/findAll/json";

  getResponse() {
    return this.http.get(this.URL);
  }
}
