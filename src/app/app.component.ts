import { Component } from '@angular/core';
import { InputLabels, CustomText } from 'src/constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public nameText: string = CustomText.Name;
    public occupationText: string = CustomText.Occupation;
    title = 'portfolio';
}
