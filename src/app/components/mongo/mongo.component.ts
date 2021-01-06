import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss']
})
export class MongoComponent implements OnInit {

  list;
  url ="https://games-reviews-final-project.herokuapp.com/review";

  constructor(private httpMongo:HttpClient) {
    this.list = this.httpMongo.get(this.url);
   }

  ngOnInit(): void {
  }

}
