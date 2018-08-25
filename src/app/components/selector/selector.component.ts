import { Component, OnInit } from '@angular/core';

// models
import { Country } from '../../models/country.model';
import { City } from '../../models/city.model';

// services
import { BackendserverrepresentorService } from '../../services/backendserverrepresentor.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  providers: [BackendserverrepresentorService]
})
export class SelectorComponent implements OnInit {

  public countries: Country[] = [];
  public cities: City[] = [];
  public selectedCountryId: number;

  // This field is used to refresh cicy selector on country change.
  // Test the app withou this field.
  public selectedCityId: number;

  constructor(private backend: BackendserverrepresentorService) { }

  ngOnInit() {
    this.countries = this.backend.getCountries();
  }

  public loadCities(): void {
    this.selectedCityId = null;
    this.cities = this.backend.getCities(this.selectedCountryId);
  }

}
