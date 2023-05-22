import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageBrowseComponent } from './collage-browse.component';

describe('CollageBrowseComponent', () => {
  let component: CollageBrowseComponent;
  let fixture: ComponentFixture<CollageBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollageBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
