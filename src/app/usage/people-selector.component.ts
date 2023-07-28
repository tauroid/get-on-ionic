import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-people-selector',
  templateUrl: './people-selector.component.html',
})
export class PeopleSelector  implements OnInit {

  @Input('people') people: number = 0
  @Output() setPeople = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {}

  clickPerson(i: number) {
    if (i === 0 && this.people === 1) {
      this.setPeople.emit(0)
    } else {
      this.setPeople.emit(i+1)
    }
  }

  fullPerson = '/assets/images/Figure_fill.png'
  emptyPerson = '/assets/images/Figure_blank.png'
}
