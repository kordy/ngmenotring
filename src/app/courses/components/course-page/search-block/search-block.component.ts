import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['../../../../app.component.less', './search-block.component.less']
})
export class SearchBlockComponent implements OnInit {

  @Output() onSearch = new EventEmitter();
  @ViewChild('searchInput') searchInput;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e) {
    e.preventDefault();
    this.onSearch.emit(this.searchInput.nativeElement.value);
  }

}
