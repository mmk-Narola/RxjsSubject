import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcomponetComponent } from './secondcomponet.component';

describe('SecondcomponetComponent', () => {
  let component: SecondcomponetComponent;
  let fixture: ComponentFixture<SecondcomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondcomponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
