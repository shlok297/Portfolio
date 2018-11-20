import { Component, OnInit } from '@angular/core';

import { InputLabels } from 'src/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public homeLabel: string = InputLabels.Home;
    public aboutMeLabel: string = InputLabels.AboutMe;
    public contactLabel: string = InputLabels.Contact;
    public resumeLabel: string = InputLabels.Resume;
    public portfolioLabel: string = InputLabels.Portfolio;

    constructor() { }

    ngOnInit() {
    }

}
