import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'WeatherApp';

  constructor(private weatherService: WeatherService){}

  cityName: string = 'Johannesburg'
  weatherData?: WeatherData;


  ngOnInit(): void{
  }


  onSubmit(){
    this.getWeatherData(this.cityName)
  }


  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName).
    subscribe({
      next: (res)=>{
        
        this.weatherData = res;
        console.log(res);
      }
    })

  }
}
