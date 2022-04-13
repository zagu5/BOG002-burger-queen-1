import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrls: ['./cocinero.component.scss']
})
export class CocineroComponent implements OnInit {

  constructor(public router: Router) { }


  ngOnInit(): void {
  }

}
