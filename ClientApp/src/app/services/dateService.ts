import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DateService {

  constructor(private http: HttpClient) { }

  private date: ServerDate;

  public getCurrentDate(): Date {
    return new Date();
  }
} 

//This would obv be in a models folder 
class ServerDate implements IServerResponse{
  currentDate: string;
  currentTime: string;
}

interface IServerResponse {
  currentDate: string;
  currentTime: string;

}
