import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  product: any;

  constructor(private service: ProductService) { }

  ngOnInit() {


    {
      alert('inside');
      this.service.getnewproduct().subscribe(Response => { this.product = Response });
      console.log(this.product);

    }

    


  
}
deleted(data)
{
  this.service.getnewproduct().subscribe(Response => { this.product = Response });


}
}