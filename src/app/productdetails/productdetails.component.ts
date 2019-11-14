import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input() item;
  product: any;
  router: any;
  ProductService: any;


  @Output()
  isDeleted = new EventEmitter();

  constructor(private _productService: ProductService) { }

delete(id) {
    this._productService.deleteProduct(id).subscribe((data: any) => {
      console.log(data);
      const dataObj = {
      };
      this.isDeleted.emit(data); });
    alert('Product deleted successfully');
  }

id(id: any) {
    throw new Error('Method not implemented.');
  }


ngOnInit() {
  }
}