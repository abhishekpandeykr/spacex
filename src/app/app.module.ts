import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [AppComponent, FiltersComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    MatChipsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
