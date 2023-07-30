import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { coefficients, UsageCalculator } from './usage-calculator.component'
import { StorageService } from '../storage-service/storage-service.service'
import { IonicStorageModule } from '@ionic/storage-angular'
import { CommonModule } from '@angular/common'
import { PeopleSelector } from './people-selector.component'

describe('UsageCalculator', () => {
  let component: UsageCalculator
  let fixture: ComponentFixture<UsageCalculator>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [StorageService],
      declarations: [ UsageCalculator, PeopleSelector ],
      imports: [IonicStorageModule.forRoot(), CommonModule]
    }).compileComponents()

    fixture = TestBed.createComponent(UsageCalculator)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should calculate one person\'s usage correctly', () => {
    function setKey(key:string,n:number) {
      const setKeyStr = ('set'
        +key.charAt(0).toUpperCase()
        +key.slice(1) as keyof typeof component);
      component.setAndSyncTotal(
        component[setKeyStr] as ((n:number) => void))(n)
    }
    for (let userKey of Object.keys(component.people)) {
      for (let otherKey of Object.keys(component.people)) {
        if (userKey === otherKey) continue
        setKey(otherKey,0)
      }
      setKey(userKey,1)
      fixture.detectChanges()
      expect(component.total).toBe(1)
      expect(component.usage).toBe(coefficients[userKey]*8*0.75)
    }
  })
})
