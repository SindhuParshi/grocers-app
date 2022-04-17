import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component'
import { TestServiceComponent } from './test-service/test-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    TestServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
