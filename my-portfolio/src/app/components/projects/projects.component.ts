import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Portfolio Website', description: 'A showcase of my work.', link: 'https://github.com/' },
    { title: 'E-Commerce App', description: 'An online shopping platform.', link: 'https://github.com/' }
  ];
}
