import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
  productos: Product[];
  //id:number;
  constructor(private productService:ProductServiceService, private ruta: Router){}
  ngOnInit(){
    this.listarProductos();
  }
  listarProductos(){
    this.productService.listarProductos().subscribe(data=>this.productos=data);
  }
  editarProducto(id:number){
    this.ruta.navigate(['/editar',id]);
  }

}
