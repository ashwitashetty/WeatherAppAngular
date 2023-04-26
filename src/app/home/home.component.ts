import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  temperature: any = null;
  active: string = 'active';
  active1: string = 'no-active';
  celcius: any ;
  fahren: any ;

  weatherDetails: any = [];
  ngOnInit(): void {
    this.active='active'
    this.celcius=true
    this.fahren=false
    let data: any = localStorage.getItem('weatherDetails');
    this.weatherDetails = JSON.parse(data);
    console.log('weatherDeta', this.weatherDetails);
    this.temperature = (
      (this.weatherDetails['main'].temp - 32) *
      0.5556
    ).toFixed(0);
  }
  handleToggle(temp:any){
    if(temp=='active'){
     
      this.active='active';
      this.active1='no-active'
      this.celcius=true
      this.fahren=false
    }
    if(temp=='active1'){
    
      this.active='no-active';
      this.active1='active'
      this.celcius=false
      this.fahren=true
    }
  }
  // toggletemp(temp: string) {
  //   console.log(this.temperature);
  //   if (temp == 'Celius') {
  //     this.temperature = ((this.temperature - 32) * 0.5556).toFixed(0);
  //     this.isCel = 'no-active';
  //     this.isFar = 'active';
  //   }
  //   if (temp == 'Fahrenheit') {
  //     this.temperature = (this.temperature * 1.8 + 32).toFixed(0);
  //     this.isFar = 'no-active';
  //     this.isCel = 'active';
  //   }
  // }
}

// console.log(this.temperature);
//     if (temp == 'cel') {
//       this.temperature = ((this.temperature - 32) * 0.5556).toFixed(0);
//       this.isCel = 'active';
//       this.isFar = 'no-active';
//     }
//     if (temp == 'far') {
//       this.temperature = (this.temperature * 1.8 + 32).toFixed(0);
//       this.isFar = 'active';
//       this.isCel = 'no-active';
//     }
