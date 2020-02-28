import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionFormComponent } from './institucion-form.component';

describe('InstitucionFormComponent', () => {
  let component: InstitucionFormComponent;
  let fixture: ComponentFixture<InstitucionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
