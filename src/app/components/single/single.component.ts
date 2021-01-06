import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  url;
  singleChar;


  constructor( private route: ActivatedRoute,private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.url = `https://rickandmortyapi.com/api/character/${ params['id']}`;
      this.singleChar = this.httpClient.get(this.url);
   })
  }


}
