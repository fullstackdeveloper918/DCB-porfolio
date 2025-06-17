import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nahb } from './nahb';

describe('Nahb', () => {
  let component: Nahb;
  let fixture: ComponentFixture<Nahb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nahb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nahb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
