import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurReference1 } from './our-reference-1';

describe('OurReference1', () => {
  let component: OurReference1;
  let fixture: ComponentFixture<OurReference1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurReference1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurReference1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
