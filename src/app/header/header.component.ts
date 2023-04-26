import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  text: string = '';
  cityResults: any = [];
  constructor(public weather: WeatherService,public router:Router) {}
  ngOnInit(): void {}
  handleChange(event: string): void {
    this.weather.searchApi(event).subscribe((response: any) => {
      console.log(response);
      this.cityResults = response;
    });
    console.log('event', event);
  }
  handleCityClick(city: string) {
    console.log(city);
    this.weather.getWeather(city).subscribe((weatherDetails: any) => {
      localStorage.setItem('weatherDetails', JSON.stringify(weatherDetails));
      this.refresh();
      console.log("Data Recieved",weatherDetails);
    });
    this.cityResults = [];
  }
  refresh() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
    // localStorage.clear();
  }
}
