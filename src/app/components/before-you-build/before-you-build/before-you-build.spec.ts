import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeYouBuild } from './before-you-build';

describe('BeforeYouBuild', () => {
  let component: BeforeYouBuild;
  let fixture: ComponentFixture<BeforeYouBuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeYouBuild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeYouBuild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
