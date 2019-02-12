import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpConfigurationComponent } from './php-configuration.component';

describe('PhpConfigurationComponent', () => {
  let component: PhpConfigurationComponent;
  let fixture: ComponentFixture<PhpConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
