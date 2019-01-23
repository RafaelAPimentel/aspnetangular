import { Component } from '@angular/core';
import { DateService } from '../services/dateService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public currentDate: Date
  constructor(dateService: DateService) {
    this.currentDate = dateService.getCurrentDate();
  }
}
