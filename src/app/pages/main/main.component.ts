import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ProveedorService } from '../../providers/proveedor.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private dataProvider: ProveedorService) { }
  public data : Cliente[] = [];
  public displayedColumns: string[] = ['idcliente', 'nombre','correo','direccion'];
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Cliente[]); 
    })
  }
  
}
