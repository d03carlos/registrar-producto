import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private urlListaroductos = 'http://localhost:9001/product/all';
  private urlGuardarProducto = 'http://localhost:9001/product/save';
  private urlListarProductosPorId = 'http://localhost:9001/product/{id}';

  constructor(private httpCliente: HttpClient) { }

  listarProductos():Observable<Product[]> {
    return this.httpCliente.get<Product[]>(this.urlListaroductos);
  }

  guardarProducto(producto: Product):Observable<Product> {
    return this.httpCliente.post<Product>(this.urlGuardarProducto, producto);
  }

  listarProductosPorId(id: number):Observable<Product> {
    return this.httpCliente.get<Product>(this.urlListarProductosPorId.replace('{id}', id.toString()));
  }
}

