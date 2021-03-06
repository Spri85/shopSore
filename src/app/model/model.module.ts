import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './staitc.datasource';
import { Cart } from './cart.model';



@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule {}