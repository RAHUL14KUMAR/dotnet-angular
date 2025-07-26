import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentUpdateComponent } from './investment-update.component';

describe('InvestmentUpdateComponent', () => {
  let component: InvestmentUpdateComponent;
  let fixture: ComponentFixture<InvestmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
