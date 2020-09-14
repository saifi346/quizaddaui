import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagequiztopicsComponent } from './managequiztopics.component';

describe('ManagequiztopicsComponent', () => {
  let component: ManagequiztopicsComponent;
  let fixture: ComponentFixture<ManagequiztopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagequiztopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagequiztopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
