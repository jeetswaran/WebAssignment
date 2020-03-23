import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from   '@angular/common/http'
import {HttpErrorInterceptor} from './Core/Common/http-error.interceptor';
import {StoreModule} from '@ngrx/store';
import { AppConfigService } from './Core/Services/app-config.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [ 
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfigService) => () => config.load(),
      deps: [AppConfigService], multi: true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpErrorInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
