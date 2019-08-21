import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from "src/app/models/teacher.model";


@Injectable()
export class TableService {
 

  constructor(private http: HttpClient) {
  }
  public getTeachers() {
    return this.http.get<any>('https://gulyashik.github.io/teachers/list.json')
  }
}