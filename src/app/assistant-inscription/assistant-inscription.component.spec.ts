import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantInscriptionComponent } from './assistant-inscription.component';

describe('AssistantInscriptionComponent', () => {
  let component: AssistantInscriptionComponent;
  let fixture: ComponentFixture<AssistantInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
