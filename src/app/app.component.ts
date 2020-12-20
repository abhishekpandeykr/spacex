import { SpacexLaunchService } from './services/spacex-launch.service';
import { Component, OnInit } from '@angular/core';
import { ILaunces } from './interfaces/launches';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'space-x';
  launches: ILaunces[] = [];
  loading: boolean;
  constructor(private spacexService: SpacexLaunchService) {}

  ngOnInit() {
    this._getAllLaunches();
  }

  private _getAllLaunches(filter?) {
    this.loading = true;
    this.spacexService.getAllLaunches(filter).subscribe(
      (res: ILaunces[]) => {
        this.launches = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  public applyFilter(filter) {
    const paramFilter = this._createFilter(filter);
    this._getAllLaunches(paramFilter);
  }

  private _createFilter(filter) {
    return (
      filter &&
      Object.keys(filter)
        .map((ele) => `${ele}=${filter[ele]}`)
        .join('&')
    );
  }
}
