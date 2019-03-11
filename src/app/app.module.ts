import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NavigationMenuPageComponent } from './navigation-menu-page/navigation-menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    NavigationMenuPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
