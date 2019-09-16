import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCreateComponent } from './coin-create.component';

describe('CoinCreateComponent', () => {
  let component: CoinCreateComponent;
  let fixture: ComponentFixture<CoinCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
