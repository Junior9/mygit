import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeInstallComponent } from './node-install.component';

describe('NodeInstallComponent', () => {
  let component: NodeInstallComponent;
  let fixture: ComponentFixture<NodeInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
