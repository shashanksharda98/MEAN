import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  skincd = ["skin1", "skin2", "skin3", "skin4", "skin5", "skin6", "skin7", "skin8"]
  y:Number[] = Array(50).fill(4)
  yr:Number = 1972
  constructor() { }

  ngOnInit(): void {
  }

}
