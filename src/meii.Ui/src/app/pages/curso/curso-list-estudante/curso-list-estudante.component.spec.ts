import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListEstudanteComponent } from './curso-list-estudante.component';

describe('CursoListEstudanteComponent', () => {
  let component: CursoListEstudanteComponent;
  let fixture: ComponentFixture<CursoListEstudanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoListEstudanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
