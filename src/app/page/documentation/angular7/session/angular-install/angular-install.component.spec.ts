import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInstallComponent } from './angular-install.component';

describe('AngularInstallComponent', () => {
  let component: AngularInstallComponent;
  let fixture: ComponentFixture<AngularInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
