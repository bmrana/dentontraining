import { HttpServiceService } from './../Data/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private http: HttpServiceService) { }

  ngOnInit() {
  }

}
