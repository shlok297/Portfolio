import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public currentPage: number = 1;

  constructor() { }

  ngOnInit() {
  }

  public checkPage(value: string): void {
    switch (value) {
      case '1':
        this.currentPage = 1;
        break;
      case '2':
        this.currentPage = 2;
        break;
      case 'next':
        this.currentPage++;
        break;
      case 'prev':
        this.currentPage--;
        break;
      default:
        // no-op
    }
  }
}
