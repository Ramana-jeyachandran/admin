import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  createProdform;
  productstatus;
  s="product";
  constructor(private fb:FormBuilder) {
    this.createProdform=this.fb.group({
   
    'product_id': this.fb.control('', [Validators.required]),
    'product_name': this.fb.control('', [Validators.required]),
    'category_name': this.fb.control('', [Validators.required]),
    'price': this.fb.control('', [Validators.required])
    
     } )
    }
    add()
    {
      if(this.createProdform.valid)
      {
      window.localStorage.setItem(this.createProdform.get('product_id').value,JSON.stringify(this.createProdform.value));

      this.productstatus="products Added";
      }
      else
      {
        this.productstatus="Product Adding Error";
      }
    }

  ngOnInit(): void {
  }

}
