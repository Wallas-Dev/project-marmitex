import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DigesterComponent } from './digester/digester.component';
import { ListDigesterComponent } from './digester/list-digester/list-digester.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { DetailsDigesterComponent } from './digester/details-digester/details-digester.component';
import { ItemDigesterComponent } from './digester/list-digester/item-digester/item-digester.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { EditFoodComponent } from './list-food/edit-food/edit-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigesterComponent,
    ListDigesterComponent,
    DetailsDigesterComponent,
    ItemDigesterComponent,
    ListFoodComponent,
    EditFoodComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
