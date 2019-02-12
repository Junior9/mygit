import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpInstallComponent } from './php-install.component';

describe('PhpInstallComponent', () => {
  let component: PhpInstallComponent;
  let fixture: ComponentFixture<PhpInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
