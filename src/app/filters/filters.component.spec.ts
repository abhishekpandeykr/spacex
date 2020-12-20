import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Heading Filters', () => {
    fixture = TestBed.createComponent(FiltersComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.filter_container').textContent).toContain(
      'Filters'
    );
  });

  it('should select the choosen year', () => {
    spyOn(component.filterValuse, 'emit');
    component.selectedYear({ year: 2010, selectable: false });
    expect(component.filterValuse.emit).toHaveBeenCalled();
  });

  it('should select the choosen launch', () => {
    spyOn(component.filterValuse, 'emit');
    component.successfullLaunch({ value: 'False', selectable: false });
    expect(component.filterValuse.emit).toHaveBeenCalled();
  });

  it('should select the choosen ', () => {
    spyOn(component.filterValuse, 'emit');
    component.successfullLanding({ value: 'False', selectable: false });
    expect(component.filterValuse.emit).toHaveBeenCalled();
  });

  it('reset Filter should emit the default filter', () => {
    spyOn(component.filterValuse, 'emit');
    component.resetFilter();
    expect(component.filterValuse.emit).toHaveBeenCalled();
  });
});
