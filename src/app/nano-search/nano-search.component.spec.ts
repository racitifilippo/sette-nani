import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoSearchComponent } from './nano-search.component';

describe('NanoSearchComponent', () => {
  let component: NanoSearchComponent;
  let fixture: ComponentFixture<NanoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
