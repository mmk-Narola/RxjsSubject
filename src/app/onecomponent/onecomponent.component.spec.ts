import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecomponentComponent } from './onecomponent.component';

describe('OnecomponentComponent', () => {
  let component: OnecomponentComponent;
  let fixture: ComponentFixture<OnecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
