import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  changeToTrue = false;

  falseToTrue = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooleanValue().subscribe(x => {
        this.changeToTrue = x;
      }) 
    }



  }

