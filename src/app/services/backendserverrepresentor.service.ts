import { Injectable } from '@angular/core';

// Models
import { Country } from '../models/country.model';
import { City } from '../models/city.model';

@Injectable()
export class BackendserverrepresentorService {

  constructor() { }

  public getCountries(): Country[] {
    return [
      {
        id: 1,
        name: 'Ukraine'
      },
      {
        id: 2,
        name: 'Russia'
      }
    ];
  }

  public getCities(countryId: number): City[] {
    switch(countryId) {
      case 1:
        return [
          {
            id: 1,
            name: 'Lviv'
          },
          {
            id: 2,
            name: 'Kyiv'
          }
        ];
      case 2:
        return [
          {
            id: 1,
            name: 'Moscow'
          }
        ]
      default:
        return [];
    }
  }
}
