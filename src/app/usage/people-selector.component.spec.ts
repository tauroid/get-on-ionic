import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeopleSelectorComponent } from './people-selector.component';

describe('PeopleSelectorComponent', () => {
  let component: PeopleSelectorComponent;
  let fixture: ComponentFixture<PeopleSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
