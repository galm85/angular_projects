import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  readonly url = "https://rickandmortyapi.com/api/character";
  characters = this.httpClient.get(this.url);




  ngOnInit(): void {
  }

}
