import {Component, Input, OnInit} from '@angular/core';
import {FilterService, SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {

  // selectedCountry: any;
  //
  // selectedCity: any;
  //
  // selectedItem: any;

  @Input() countries: any[] = [];

  // items: any[] | any;

  filteredCountries: any[] | any;

  // filteredItems: any[] | any;
  //
  // selectedCountries: any[] | any;

  selectedCountryAdvanced: any[] | any;

  // filteredBrands: any[] | any;

  // groupedCities: SelectItemGroup[] | any;
  //
  // filteredGroups: any[] | any;

  constructor(private filterService: FilterService ) { }

  ngOnInit(): void {
    // this.groupedCities = [
    //   {
    //     label: 'Germany', value: 'de',
    //     items: [
    //       {label: 'Berlin', value: 'Berlin'},
    //       {label: 'Frankfurt', value: 'Frankfurt'},
    //       {label: 'Hamburg', value: 'Hamburg'},
    //       {label: 'Munich', value: 'Munich'}
    //     ]
    //   },
    //   {
    //     label: 'USA', value: 'us',
    //     items: [
    //       {label: 'Chicago', value: 'Chicago'},
    //       {label: 'Los Angeles', value: 'Los Angeles'},
    //       {label: 'New York', value: 'New York'},
    //       {label: 'San Francisco', value: 'San Francisco'}
    //     ]
    //   },
    //   {
    //     label: 'Japan', value: 'jp',
    //     items: [
    //       {label: 'Kyoto', value: 'Kyoto'},
    //       {label: 'Osaka', value: 'Osaka'},
    //       {label: 'Tokyo', value: 'Tokyo'},
    //       {label: 'Yokohama', value: 'Yokohama'}
    //     ]
    //   }
    // ];

    // this.items = [];
    // for (let i = 0; i < 10000; i++) {
    //   this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    // }
  }

  filterCountry(event: any): void {
    // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    const query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  // filterItems(event: any): void {
  //   // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  //   const filtered: any[] = [];
  //   const query = event.query;
  //
  //
  //   for (let i = 0; i < this.items.length; i++) {
  //     const item = this.items[i];
  //     if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
  //       filtered.push(item);
  //     }
  //   }
  //
  //   this.filteredItems = filtered;
  // }

  // filterGroupedCity(event: any): void {
  //   const query = event.query;
  //   const filteredGroups = [];
  //
  //   for (const optgroup of this.groupedCities) {
  //     const filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, 'contains');
  //     if (filteredSubOptions && filteredSubOptions.length) {
  //       filteredGroups.push({
  //         label: optgroup.label,
  //         value: optgroup.value,
  //         items: filteredSubOptions
  //       });
  //     }
  //   }
  //
  //   this.filteredGroups = filteredGroups;
  // }
}
