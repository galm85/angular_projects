import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  readonly url ="https://jsonplaceholder.typicode.com/posts"

  posts = this.httpClient.get(this.url);







  ngOnInit(): void {
  }

}
