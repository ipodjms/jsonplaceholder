import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDetailComponent } from './fake-detail.component';

describe('FakeDetailComponent', () => {
  let component: FakeDetailComponent;
  let fixture: ComponentFixture<FakeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
