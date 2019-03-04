import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBasicCrudComponent } from './node-basic-crud.component';

describe('NodeBasicCrudComponent', () => {
  let component: NodeBasicCrudComponent;
  let fixture: ComponentFixture<NodeBasicCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeBasicCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeBasicCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
