import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadosFormComponent } from './invitados-form.component';

describe('InvitadosFormComponent', () => {
  let component: InvitadosFormComponent;
  let fixture: ComponentFixture<InvitadosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
