import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurReferences } from './our-references';

describe('OurReferences', () => {
  let component: OurReferences;
  let fixture: ComponentFixture<OurReferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurReferences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurReferences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
