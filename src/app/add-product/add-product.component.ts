import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit{
 myForm: FormGroup;
  constructor(private Productlist:ProductService) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',Validators.required),
      image:new FormControl('',Validators.required),
      isAvailable: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      Price:new FormControl('',Validators.required),
      
    });
  }
  onSubmit() {
    if(this.myForm.valid == true)
    {

    this.Productlist.addProduct (this.myForm.value);
    
    }
    else
    {
      alert(false);
    }
        console.log('', this.myForm.value);
  };
  
}
