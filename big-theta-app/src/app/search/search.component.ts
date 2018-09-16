import { Component, OnInit } from '@angular/core';
import {CompleterService, CompleterData, CompleterItem, RemoteData} from 'ng2-completer';

import { AuthService } from '../services/auth.service';
import { GraphSearchService } from 'app/services/graph-search.service';
import {MathDatabaseService} from "../services/math-database/math-database.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  protected equationStr: string;
  protected dataService: RemoteData;
  searchQuote = "Enter a topic";

  private databaseURL = 'http://localhost:8887/bigtheta';

  constructor(private completerService: CompleterService, private _authService: AuthService, private _graphSearchService: GraphSearchService, private mathDatabaseService: MathDatabaseService) {

    this.dataService = this.completerService.remote(this.databaseURL + '/subject/search/', "title", 'title');
    this.dataService.dataField("body");



  }
  
  equSelected(selected: CompleterItem) {
    if (selected) {
      this._graphSearchService.newSearch(selected.originalObject.id);
      this._graphSearchService.newEquationSubject({ id: selected.originalObject.id, title: selected.originalObject.title, url: selected.originalObject.url });
    }
  }

  ngOnInit() {
  }

}
