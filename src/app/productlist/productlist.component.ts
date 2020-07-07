import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productlist=[];
  constructor() { 
   for(let i=0;i<localStorage.length;i++)
    {
       //console.log(localStorage.length);
        let key=localStorage.key(i);
        //console.log(key);
        //console.log(window.localStorage.getItem(i.toString()));
        //this.productlist.push(JSON.parse(window.localStorage.getItem(i.toString())));
        this.productlist.push(JSON.parse(localStorage.getItem(key)));
        
    }
  }
  

  ngOnInit(): void {
  }

}
