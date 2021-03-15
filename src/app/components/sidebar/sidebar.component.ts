import { Component, OnInit } from '@angular/core';
import { faCoffee,faAddressBook, faBuilding, faFax } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faCoffee = faCoffee;
  faAddressBook = faAddressBook
  faBuilding = faBuilding
  faFax = faFax

  constructor() { }

  ngOnInit(): void {
    
  }

}
