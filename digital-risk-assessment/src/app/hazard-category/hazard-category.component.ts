import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hazard-category',
  templateUrl: './hazard-category.component.html',
  styleUrls: ['./hazard-category.component.css']
})
export class HazardCategoryComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
  } 

}
