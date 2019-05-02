import { Component, Input, OnInit } from '@angular/core';

/**
 * application header component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputSideNav;

  /**
   * Creates an instance of the HeaderComponent with the injected services
   */
  constructor() { }

  /**
   * See [ngOnInit]{@see OnInit#ngOnInit}
   */
  ngOnInit() {}

  /**
   * Toggle applicationn sidenav
   */
  public toggleSideNav() {
    this.inputSideNav.toggle();
  }

}
