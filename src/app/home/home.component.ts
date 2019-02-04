import { Component, OnInit } from '@angular/core';
import { CustomText } from 'src/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nameText: string = CustomText.Name;
  public occupationText: string = CustomText.Occupation;
  title = 'portfolio';

  constructor() { }

  ngOnInit() {
  }

}
