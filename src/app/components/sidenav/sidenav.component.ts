import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'customers',
      icon: 'fas fa-users',
      link: 'customers',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: 'contacts',
    },
    {
      title: 'leads',
      icon: 'fas fa-hand-point-up',
      link: 'leads',
    },
    {
      title: 'reports',
      icon: 'fas fa-flag',
      link: 'reports',
    },
    {
      title: 'integrations',
      icon: 'fab fa-stack-exchange',
      link: 'integrations',
    },
    {
      title: 'year-end sale',
      icon: 'fas fa-glass-cheers',
      link: 'sale',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
