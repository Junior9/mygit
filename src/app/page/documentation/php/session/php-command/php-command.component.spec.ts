import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpCommandComponent } from './php-command.component';

describe('PhpCommandComponent', () => {
  let component: PhpCommandComponent;
  let fixture: ComponentFixture<PhpCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
