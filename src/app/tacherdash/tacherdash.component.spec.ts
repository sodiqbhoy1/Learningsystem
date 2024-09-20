import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacherdashComponent } from './tacherdash.component';

describe('TacherdashComponent', () => {
  let component: TacherdashComponent;
  let fixture: ComponentFixture<TacherdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacherdashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacherdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
