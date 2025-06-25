import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interior } from './interior';

describe('Interior', () => {
  let component: Interior;
  let fixture: ComponentFixture<Interior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
