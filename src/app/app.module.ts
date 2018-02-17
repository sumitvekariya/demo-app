
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ArticleService } from './article.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SortPipe } from './sort.pipe';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    SortPipe,
    ArticleFormComponent,
    ArticleListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    Ng2OrderModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

