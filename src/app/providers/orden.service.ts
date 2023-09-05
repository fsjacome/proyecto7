import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private http:HttpClient) { }
  private URL: string = "https://express-production-1fdc.up.railway.app/rest/orden/findAll/json";

  getResponse() {
    return this.http.get(this.URL);
  }
  getById(id:Number) {
    return this.http.get("https://express-production-1fdc.up.railway.app/rest/orden/findById/"+id+"/json");
  }
}
