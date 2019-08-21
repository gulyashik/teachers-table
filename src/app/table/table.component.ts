import { Component, OnInit } from '@angular/core';
import { TableService } from "src/app/services/table.service";
import { Teacher } from "src/app/models/teacher.model"; 
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public teachers: MatTableDataSource<Teacher>;
  displayedColumns: string[] = [ 'fullname','date_submited','position','organization','org_type','territory',
'location','vid','birthdate','qualification_category','plan_attestation_year','workflow'];
  constructor(private tableservice: TableService) {}

  applyFilter(value: string) {
    this.teachers.filter = value.trim().toLowerCase();
  }
  
  

  ngOnInit() {
    this.tableservice.getTeachers().subscribe((response)=>{
      this.teachers = new MatTableDataSource(response.teachers);
    })
  }

}
