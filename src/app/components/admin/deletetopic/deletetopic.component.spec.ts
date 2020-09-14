import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetopicComponent } from './deletetopic.component';

describe('DeletetopicComponent', () => {
  let component: DeletetopicComponent;
  let fixture: ComponentFixture<DeletetopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
