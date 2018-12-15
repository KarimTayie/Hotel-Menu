import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { ActionsComponent } from './actions/actions.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceItemComponent } from './services/service-list/service-item/service-item.component';
import { TittleBoldPipe } from './services/titleBold.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    ActionsComponent,
    ServiceListComponent,
    ServiceItemComponent,
    TittleBoldPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
