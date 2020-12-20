import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { AppComponent } from './app.component';
import { IFilter } from './interfaces/filter';
import { ILaunces } from './interfaces/launches';
import { SpacexLaunchService } from './services/spacex-launch.service';

describe('AppComponent', () => {
  const mockResponse: ILaunces[] = [
    {
      crew: 'alpha',
      launch_date_utc: 12345,
      links: {
        mission_patch: 'dont know',
        article_link: 'link',
        mission_patch_small: null,
        wikipedia: null,
      },
      mission_name: 'alpha test',
      launch_year: '2009',
      launch_success: true,
      mission_id: [],
    },
  ];
  let spacexMockService = jasmine.createSpyObj('SpacexLaunchService', [
    'getAllLaunches',
  ]);

  spacexMockService.getAllLaunches.and.returnValue(of(mockResponse));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: SpacexLaunchService, useValue: spacexMockService },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'space-x'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('space-x');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain(
      'SpaceX Launch Programs'
    );
  });

  it('#applyFilter should call _getAllLaunches', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const filter: IFilter = {
      launch_year: null,
      launch_success: null,
      land_success: null,
    };
    app.applyFilter(filter);
    expect(spacexMockService.getAllLaunches).toHaveBeenCalled();
  });
});
