import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motos } from './motos';

describe('Motos', () => {
  let component: Motos;
  let fixture: ComponentFixture<Motos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
