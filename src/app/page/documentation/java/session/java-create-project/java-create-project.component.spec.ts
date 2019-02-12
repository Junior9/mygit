import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCreateProjectComponent } from './java-create-project.component';

describe('JavaCreateProjectComponent', () => {
  let component: JavaCreateProjectComponent;
  let fixture: ComponentFixture<JavaCreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaCreateProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
