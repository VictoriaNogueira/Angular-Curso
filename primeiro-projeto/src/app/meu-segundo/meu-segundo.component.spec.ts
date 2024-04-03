import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponent } from './meu-segundo.component';

describe('MeuSegundoComponent', () => {
  let component: MeuSegundoComponent;
  let fixture: ComponentFixture<MeuSegundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuSegundoComponent]
    });
    fixture = TestBed.createComponent(MeuSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
