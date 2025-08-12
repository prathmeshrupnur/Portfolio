import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesection1 } from './homesection1';

describe('Homesection1', () => {
  let component: Homesection1;
  let fixture: ComponentFixture<Homesection1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homesection1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homesection1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
