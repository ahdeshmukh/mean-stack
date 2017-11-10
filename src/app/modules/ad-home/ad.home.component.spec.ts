import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad.HomeComponent } from './ad.home.component';

describe('Ad.HomeComponent', () => {
  let component: Ad.HomeComponent;
  let fixture: ComponentFixture<Ad.HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad.HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad.HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
