import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretKey } from './secret-key';

describe('SecretKey', () => {
  let component: SecretKey;
  let fixture: ComponentFixture<SecretKey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretKey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretKey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
