import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit{
 myForm: FormGroup;
  id:any;
  data:any;

  constructor(private Productlist:ProductService, private route: ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      imageUrl:new FormControl('',Validators.required),
      isAvailable: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      
    });
    
    this.route.params.subscribe(params => {
      this.id = +params.id;});
    
        this.Productlist.filterProducts(this.id).subscribe(response => {
          this.data = response;
          this.myForm.patchValue({
            Id:this.data.Id,
            title: this.data.title,
            description: this.data.description,
            imageUrl: this.data.imageUrl,
            price: this.data.price,
            isAvailable: this.data.isAvailable
          });
          
        });
      }
  
    
  
  onSubmit() {
    this.route.params.subscribe(params=>{
      console.log('params', params);
      
      this.id=+params.id;
      
    
    } );
      if(this.id){

        this.Productlist.edit(this.myForm.value,this.id).subscribe( data=> {
          console.log(data);
          alert("Product added succesfully");
          this.router.navigate([""]);
        });
        } 
      else
      {
        this.Productlist.addProduct(this.myForm.value).subscribe(data=>{console.log(data);
    
        alert("Product added succesfully");
        this.router.navigate([""]);
        });
      }
   
    
  
  }
  del(){
    this.Productlist.deleteProduct(this.id).subscribe(Response=>{console.log(Response);});
  }
}
