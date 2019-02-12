import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConfigurationComponent } from './angular-configuration.component';

describe('AngularConfigurationComponent', () => {
  let component: AngularConfigurationComponent;
  let fixture: ComponentFixture<AngularConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
