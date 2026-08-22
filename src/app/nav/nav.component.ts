import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly links = [
    { href: '#about', label: 'about' },
    { href: '#pipeline', label: 'pipeline' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' },
  ];
}
