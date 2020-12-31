import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectService } from '../connect/connect.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() gotResults = new EventEmitter<object[]>();
  results: object[] = [];

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.connectService.getPeople(form.value.name)
    .subscribe(
      (response: any) => {
        this.results = response.results;
        this.gotResults.emit(this.results);
      }
    );
  }

}
