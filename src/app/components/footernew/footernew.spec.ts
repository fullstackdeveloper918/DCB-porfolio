import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footernew } from './footernew';

describe('Footernew', () => {
  let component: Footernew;
  let fixture: ComponentFixture<Footernew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footernew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footernew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
