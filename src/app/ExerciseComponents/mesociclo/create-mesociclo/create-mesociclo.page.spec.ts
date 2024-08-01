import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMesocicloPage } from './create-mesociclo.page';

describe('CreateMesocicloPage', () => {
  let component: CreateMesocicloPage;
  let fixture: ComponentFixture<CreateMesocicloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMesocicloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
