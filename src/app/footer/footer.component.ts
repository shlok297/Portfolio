import { Component, OnInit } from '@angular/core';
import { InputLabels } from 'src/constants';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    public createdByLabel: string = InputLabels.CreatedBy;
    public userNameLabel: string = InputLabels.User;
    constructor() { }

    ngOnInit() {
    }

}
