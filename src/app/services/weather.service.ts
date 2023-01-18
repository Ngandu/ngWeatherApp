import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {WeatherData} from "../models/weather.model";
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityname: string): Observable<WeatherData>{

    return this.http.get<WeatherData>(`https://api.weatherapi.com/v1/current.json?key=${environment.apiKey}&q=${cityname}`)

  }
}
