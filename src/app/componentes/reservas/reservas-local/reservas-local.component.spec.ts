import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasLocalComponent } from './reservas-local.component';

describe('ReservasLocalComponent', () => {
  let component: ReservasLocalComponent;
  let fixture: ComponentFixture<ReservasLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
