import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CneGridFilterSortingComponent } from './cne-grid-filter-sorting.component';

describe('CneGridFilterSortingComponent', () => {
  let component: CneGridFilterSortingComponent;
  let fixture: ComponentFixture<CneGridFilterSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CneGridFilterSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CneGridFilterSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
