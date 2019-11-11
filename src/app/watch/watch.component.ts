import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  
    product;
    constructor( private service: ProductService)
    {
      this.product=this.service.getProducts();
    }

  ngOnInit() {
  }
 
}
