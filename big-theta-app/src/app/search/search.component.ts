import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  protected equationStr: string;
  protected dataService: CompleterData;
  searchQuote = "Enter your equation here";
 
  constructor(private completerService: CompleterService, private _authService:AuthService) {
    this.dataService = this.completerService.remote('https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/subject/search/', this.equationStr, 'title').searchFields('title');
  }
  
  equSelected(selected: CompleterItem) {
    if (selected) {
      // object containing subject string and id
      // console.log(selected.originalObject);
    }
  }

  ngOnInit() {
  }

}
