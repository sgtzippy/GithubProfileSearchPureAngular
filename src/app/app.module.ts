import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { MyMaterialModule } from './my-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes} from './app.routes';

import { SearchProfileServiceService } from './services/search-profile-service.service'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MyMaterialModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
	BrowserAnimationsModule
  ],
  providers: [SearchProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
