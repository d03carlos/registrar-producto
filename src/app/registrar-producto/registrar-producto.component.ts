import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {
  producto:Product =new Product();
  id:number;
  constructor(private productService:ProductServiceService,
    private ruta:Router, private ruta2:ActivatedRoute){}

    ngOnInit(){
      this.id=this.ruta2.snapshot.params['id'];
      this.productService.listarProductosPorId(this.id).subscribe(data=>{
        this.producto=data;
      });
    }
  onSubmit(){
    this.registrarProducto();
  }
  private registrarProducto(){
    this.productService.guardarProducto(this.producto).subscribe(data=>{
      console.log(data);
      this.ruta.navigate(['/listar']);
    })
  }
}
