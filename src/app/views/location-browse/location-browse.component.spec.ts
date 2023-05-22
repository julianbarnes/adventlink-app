import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBrowseComponent } from './location-browse.component';

describe('LocationBrowseComponent', () => {
  let component: LocationBrowseComponent;
  let fixture: ComponentFixture<LocationBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
