import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsItemComponent } from './results-item.component';

describe('ResultsItemComponent', () => {
  let component: ResultsItemComponent;
  let fixture: ComponentFixture<ResultsItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsItemComponent);
    component = fixture.componentInstance;
    component.item = {
      name: 'very good deal',
      href: 'https://good.deal',
      price: {
        pounds: 1,
        pence: 0
      },
      speed: 'mobile',
      regions: [ 'UK' ],
      benefits: [],
      penalty: 0,
      maxPenalty: 0,
      valid: true
    }
    component.regions = [
      'England'
    ]
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
