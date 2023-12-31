import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLauoutComponent } from './shared/components/main-lauout/main-lauout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptor";
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import uaLocale from "@angular/common/locales/uk";

registerLocaleData(uaLocale, 'uk')

const INTERСEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLauoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        NgOptimizedImage
    ],
  providers: [INTERСEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
