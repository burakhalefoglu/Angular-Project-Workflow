import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductServicesService } from './Services/product-services.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [ProductServicesService],

})
export class BodyComponent implements OnInit {

  constructor(private productService:ProductServicesService) { }

  products: Product[]= [];

  ngOnInit(): void {

    this.productService.getProduct().subscribe(data => {

      this.products=data;

    });
  }

}
