import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpLaravelCrudComponent } from './php-laravel-crud.component';

describe('PhpLaravelCrudComponent', () => {
  let component: PhpLaravelCrudComponent;
  let fixture: ComponentFixture<PhpLaravelCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpLaravelCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpLaravelCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
