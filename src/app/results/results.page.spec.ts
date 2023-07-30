import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResultsPage } from './results.page';
import { StorageService } from '../storage-service/storage-service.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizTemplateModule } from '../quiz-template/quiz-template.module';
import { SectionTitleComponent } from '../section-title/section-title.component';

describe('ResultsPage', () => {
  let component: ResultsPage;
  let fixture: ComponentFixture<ResultsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [ StorageService ],
      imports: [ IonicStorageModule.forRoot(), CommonModule,
                 QuizTemplateModule, RouterTestingModule ],
      declarations: [ ResultsPage, SectionTitleComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
