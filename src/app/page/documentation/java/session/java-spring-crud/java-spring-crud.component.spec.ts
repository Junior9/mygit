import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSpringCrudComponent } from './java-spring-crud.component';

describe('JavaSpringCrudComponent', () => {
  let component: JavaSpringCrudComponent;
  let fixture: ComponentFixture<JavaSpringCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaSpringCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSpringCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
