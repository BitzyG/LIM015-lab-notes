// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { environment } from '../environments/environment'; //FIREBASE

//Version nueva
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideStorage,getStorage } from '@angular/fire/storage';

// Version anterior
import { AngularFireModule } from '@angular/fire/compat';
import { RegistrationComponent } from './components/registration/registration.component'; //FIREBASE
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; //FIREBASE


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), //FIREBASE
    // AngularFirestoreModule, //FIREBASE

    /*
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage())
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
// Components
// import { environment } from '../environments/environment'; //FIREBASE

// Version anterior
// import { AngularFireModule } from '@angular/fire/compat'; //FIREBASE
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; //FIREBASE

    // AngularFireModule.initializeApp(environment.firebase), //FIREBASE
    // AngularFirestoreModule, //FIREBASE

})
*/