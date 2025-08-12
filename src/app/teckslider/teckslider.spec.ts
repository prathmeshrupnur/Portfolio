import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teckslider } from './teckslider';

describe('Teckslider', () => {
  let component: Teckslider;
  let fixture: ComponentFixture<Teckslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teckslider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teckslider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
