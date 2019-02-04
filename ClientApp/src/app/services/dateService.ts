import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DateService {

  constructor(private http: HttpClient) { }

  private date: ServerDate;

  public getCurrentDate(): Date {
    this.getDateFromServer().subscribe((result) => {
      this.date.currentDate = result.currentDate;
      this.date.currentTime = result.currentTime;
    });
    return new Date();
  }

  public getDateFromServer(): Observable<IServerResponse>{
    return this.http.get<IServerResponse>("/serverTime");
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
