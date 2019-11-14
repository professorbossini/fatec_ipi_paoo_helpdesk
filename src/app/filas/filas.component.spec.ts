import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilasComponent } from './filas.component';

describe('FilasComponent', () => {
  let component: FilasComponent;
  let fixture: ComponentFixture<FilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
