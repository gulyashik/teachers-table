import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableService } from "src/app/services/table.service";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
