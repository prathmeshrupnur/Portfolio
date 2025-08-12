import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projecttemplate } from './projecttemplate';

describe('Projecttemplate', () => {
  let component: Projecttemplate;
  let fixture: ComponentFixture<Projecttemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projecttemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projecttemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
