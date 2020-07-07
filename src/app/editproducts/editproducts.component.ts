import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
  editForm;
  editDetails=[];
  p_id;
  constructor(private fb:FormBuilder,private ac:ActivatedRoute) { 
    this.ac.params.subscribe((currentId) => {
      this.p_id= currentId.id;
      this.editDetails.push(JSON.parse(window.localStorage.getItem(this.p_id.toString())))
    console.log(JSON.stringify(window.localStorage.getItem(this.p_id.toString())));  
    this.editForm=this.fb.group({
   
      'product_id': this.fb.control(this.editDetails[0].product_id, [Validators.required]),
      'product_name': this.fb.control(this.editDetails[0].product_name, [Validators.required]),
      'category_name': this.fb.control(this.editDetails[0].category_name, [Validators.required]),
      'price': this.fb.control(this.editDetails[0].price, [Validators.required])
      
       } )
       this.editDetails=[];
    })
    console.log(this.p_id);
    
     
  }

  ngOnInit(): void {
  }

}
