import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetopicComponent } from './managetopic.component';

describe('ManagetopicComponent', () => {
  let component: ManagetopicComponent;
  let fixture: ComponentFixture<ManagetopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
