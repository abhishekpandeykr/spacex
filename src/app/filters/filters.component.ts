import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFilter, IFIlterValues } from '../interfaces/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public years: IFIlterValues[] = [
    { year: 2010, selectable: false },
    { year: 2011, selectable: false },
    { year: 2012, selectable: false },
    { year: 2013, selectable: false },
    { year: 2014, selectable: false },
    { year: 2015, selectable: false },
    { year: 2016, selectable: false },
    { year: 2017, selectable: false },
    { year: 2018, selectable: false },
    { year: 2019, selectable: false },
    { year: 2020, selectable: false },
  ];
  public isSuccessFullLaunc: IFIlterValues[] = [
    { value: 'False', selectable: false },
    { value: 'True', selectable: false },
  ];
  public isSuccessLand: IFIlterValues[] = [
    { value: 'False', selectable: false },
    { value: 'True', selectable: false },
  ];
  private filter: IFilter = {
    launch_year: null,
    launch_success: null,
    land_success: null,
  };
  @Output() filterValuse: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectedYear($event): void {
    this._setTODefault(this.years, $event);
    this.filter.launch_year = $event.year;
    this._emitValues();
  }

  successfullLaunch($event): void {
    this._setTODefault(this.isSuccessFullLaunc, $event);
    this.filter.launch_success = $event.value.toLowerCase() === 'true';
    this._emitValues();
  }

  successfullLanding($event): void {
    this._setTODefault(this.isSuccessLand, $event);
    this.filter.land_success = $event.value.toLowerCase() === 'true';
    this._emitValues();
  }

  private _emitValues(): void {
    this.filterValuse.emit(this.filter);
  }

  private _setTODefault(items, $event) {
    this._reset(items);
    $event.selectable = true;
  }

  private _reset(items) {
    items && items.forEach((element) => (element.selectable = false));
  }

  public resetFilter() {
    [this.isSuccessLand, this.isSuccessFullLaunc, this.years].forEach((ele) =>
      this._reset(ele)
    );
    this.filterValuse.emit(null);
  }
}
