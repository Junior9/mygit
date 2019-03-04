import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTesteComponent } from './node-teste.component';

describe('NodeTesteComponent', () => {
  let component: NodeTesteComponent;
  let fixture: ComponentFixture<NodeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
