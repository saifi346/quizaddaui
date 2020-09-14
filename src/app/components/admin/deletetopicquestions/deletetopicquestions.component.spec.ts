import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetopicquestionsComponent } from './deletetopicquestions.component';

describe('DeletetopicquestionsComponent', () => {
  let component: DeletetopicquestionsComponent;
  let fixture: ComponentFixture<DeletetopicquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetopicquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetopicquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
