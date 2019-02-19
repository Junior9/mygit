import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSpringTestComponent } from './java-spring-test.component';

describe('JavaSpringTestComponent', () => {
  let component: JavaSpringTestComponent;
  let fixture: ComponentFixture<JavaSpringTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaSpringTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSpringTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
