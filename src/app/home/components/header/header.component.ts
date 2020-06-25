import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const DEBOUNCE_TIME = 750;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public showSearchInput = false;
  public searchForm: FormGroup;

  @Output()
  public filterElements: EventEmitter<string> = new EventEmitter();

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });

    this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.filterElements.next(value);
    });
  }

  public toggleSearchInput(): void {
    this.showSearchInput = !this.showSearchInput;
  }
}
