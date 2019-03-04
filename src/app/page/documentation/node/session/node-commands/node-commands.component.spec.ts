import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCommandsComponent } from './node-commands.component';

describe('NodeCommandsComponent', () => {
  let component: NodeCommandsComponent;
  let fixture: ComponentFixture<NodeCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
