import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risk-matrix',
  templateUrl: './risk-matrix.component.html',
  styleUrls: ['./risk-matrix.component.css']
})
export class RiskMatrixComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    
  }

}
