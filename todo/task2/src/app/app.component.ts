import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../env";
import todoitems from "../todoitems";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data;
  todoForm: FormGroup;

  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  getData() {
    let url = environment.SERVER_URL;
     return this.http.get(url + "/todo", {
       headers: { "Authorization": `Basic ${environment.SERVER_URL}`}
     });
  }
}
