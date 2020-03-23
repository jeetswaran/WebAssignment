import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/Core/Services/search.service';
import {UserModel} from '../../models/userModel'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gitUsers: UserModel[];
   searchText : any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  public searchUser() {
    this.searchService.getUsers(this.searchText).subscribe(users => {
      this.gitUsers = users; 
    })
  }

}
