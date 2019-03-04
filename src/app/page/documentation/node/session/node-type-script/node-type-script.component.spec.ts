import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTypeScriptComponent } from './node-type-script.component';

describe('NodeTypeScriptComponent', () => {
  let component: NodeTypeScriptComponent;
  let fixture: ComponentFixture<NodeTypeScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTypeScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
