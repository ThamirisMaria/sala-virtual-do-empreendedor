import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaVirtualComponent } from './sala-virtual.component';

describe('SalaVirtualComponent', () => {
  let component: SalaVirtualComponent;
  let fixture: ComponentFixture<SalaVirtualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaVirtualComponent]
    });
    fixture = TestBed.createComponent(SalaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
