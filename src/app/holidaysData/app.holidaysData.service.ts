import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HolidaysDataService{
    private _dataUrl : string = 'https://holidayapi.com/v1/holidays?key=bc59b6e5-2798-4473-a7dc-1e0719f1df8c&country=US&year=2016';
    constructor(private _http : HttpClient){}

    getData():  
       
       /*  Observable<Person>{
            let people$ = this.http
              .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
              .map(mapPersons);
              return people$;
           */

      /*   this._http
        .get('../assets/my_json_file.json')
        .map(x => x.json() )
        .map( (data) => 
          this._data = data
        )
      console.log(this._data)
        */
        // return ['vinod', 'vinod1', 'vinod2'];
        //this._http.get<any[]>(this._dataUrl);
    } 
}