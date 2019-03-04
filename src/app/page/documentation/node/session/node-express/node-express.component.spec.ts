import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeExpressComponent } from './node-express.component';

describe('NodeExpressComponent', () => {
  let component: NodeExpressComponent;
  let fixture: ComponentFixture<NodeExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
