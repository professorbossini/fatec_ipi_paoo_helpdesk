import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaFilaComponent } from './adiciona-fila.component';

describe('AdicionaFilaComponent', () => {
  let component: AdicionaFilaComponent;
  let fixture: ComponentFixture<AdicionaFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
