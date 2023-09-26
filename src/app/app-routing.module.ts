import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';

const routes: Routes = [
  {path:'listar', component:ListarProductosComponent},
  {path:'', redirectTo:'listar', pathMatch:'full'},
  {path:'registrar', component:RegistrarProductoComponent},
  {path:'editar/:id', component:RegistrarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
