import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasCardComponent } from './reservas-card.component';

describe('ReservasCardComponent', () => {
  let component: ReservasCardComponent;
  let fixture: ComponentFixture<ReservasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
