import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() filterEvents: Function;
  categoryForm: FormControl = new FormControl([])
  constructor() { }

  ngOnInit() {
  }

}
