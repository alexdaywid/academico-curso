import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListEmpresaComponent } from './curso-list-empresa.component';

describe('CursoListEmpresaComponent', () => {
  let component: CursoListEmpresaComponent;
  let fixture: ComponentFixture<CursoListEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoListEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
