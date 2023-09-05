import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ProveedorService } from '../../providers/proveedor.service';
import { Orden } from '../../interfaces/orden';
import { OrdenService } from '../../providers/orden.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  constructor(private dataProvider: ProveedorService , private dataProvider2: OrdenService) { }
  selected = null;
  
  public data : Cliente[] = [];
  public data2 : Orden[] = [];
  public dataf : Orden[] = [];
  public displayedColumns: string[] = ['idcliente', 'nombre','correo','direccion'];
  public clientes: number[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Cliente[]); 
      for (let elemento of this.data) {
        if (!this.clientes.includes(elemento.idcliente) )  
        this.clientes.push(elemento.idcliente);
      }
    })
    this.dataProvider2.getResponse().subscribe((response) => { 
      this.data2 = (response as Orden[]); 
      this.dataf = this.data2;
    })
  }
  filtrarOrden(){
    if (this.selected == null){
      this.data2 = this.dataf;
    }else{
      this.data2 = [];
      for (let elemento of this.dataf) {
        if (elemento.cliente_idcliente == this.selected)  
        this.data2.push(elemento);
      } 
    }
  }

}

