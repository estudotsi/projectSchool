import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@app/shared/models/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {

@Input() menuTitle: string = '';
@Input() shadow = false;
@Input() popText = false;
@Input() items_menu: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
