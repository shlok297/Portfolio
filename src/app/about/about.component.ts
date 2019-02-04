import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public isExperienceTab: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/about') {
      this.isExperienceTab = true;
    } else {
      this.isExperienceTab = false;
    }
  }

  public showExperience(): void {
    this.isExperienceTab = true;
  }

  public hideExperience(): void {
    this.isExperienceTab = false;
  }

}
