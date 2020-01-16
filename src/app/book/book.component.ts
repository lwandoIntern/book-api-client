import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

   rootUrl = 'http://localhost:8080/bookapi';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const resp = this.http.get(this.rootUrl + '/api/book');
    resp.subscribe((data) => console.log(data));
  }

}
