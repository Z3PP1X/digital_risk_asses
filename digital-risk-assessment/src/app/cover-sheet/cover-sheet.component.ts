import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cover-sheet',
  templateUrl: './cover-sheet.component.html',
  styleUrls: ['./cover-sheet.component.css']
})
export class CoverSheetComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
  }

}



