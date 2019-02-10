import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjetoComponent } from './angular-projeto.component';

describe('AngularProjetoComponent', () => {
  let component: AngularProjetoComponent;
  let fixture: ComponentFixture<AngularProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
