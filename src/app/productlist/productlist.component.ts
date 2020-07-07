import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productlist=[];
  constructor() { 
    for(let i=1;i<=3;i++)
    {
        console.log(window.localStorage.getItem(i.toString()));
        this.productlist.push(JSON.parse(window.localStorage.getItem(i.toString())));
        console.log(this.productlist[i]);
    }
  }
  

  ngOnInit(): void {
  }

}
