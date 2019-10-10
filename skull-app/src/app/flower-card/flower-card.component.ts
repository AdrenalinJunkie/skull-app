import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss']
})
export class FlowerCardComponent implements OnInit {
  skull:boolean = true;
  active:boolean = false;
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
