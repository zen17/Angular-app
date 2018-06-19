import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { rootReducer } from "./store/index"
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule,Routes, Router} from  "@angular/router";
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/';

import { AddComponent } from './components/add/add.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { MynavComponent } from './components/mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { DateComponent } from './components/date/date.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TodoDataService} from './services/todo-data.service';
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';




const appRoutes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'statistics',component:StatisticComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListTodoComponent,
    AddComponent,
    MynavComponent,
    HomeComponent,
    StatisticComponent,
    DateComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({}),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatGridListModule
    
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
