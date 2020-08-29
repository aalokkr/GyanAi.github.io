import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { CatgoryComponent } from './catgory/catgory.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes:Routes=[

  {path:''  , component: HomeComponent},
  {path:'login'  ,component:LoginComponent},
  {path:'blog'  ,component:BlogComponent},

  {path:'register'  ,component:RegisterComponent},
  {path:'category'  ,component:CatgoryComponent},
  {path:'contact'  ,component:ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    BlogComponent,
    FooterComponent,
    CatgoryComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
