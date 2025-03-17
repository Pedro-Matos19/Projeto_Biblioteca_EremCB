import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD1YX-G_S5okUtwIfryfqkfocPbGuaWw74",
  authDomain: "biblioteca-cb.firebaseapp.com",
  projectId: "biblioteca-cb",
  storageBucket: "biblioteca-cb.firebasestorage.app",
  messagingSenderId: "321029652439",
  appId: "1:321029652439:web:384f133aee757c63b9d592",
  measurementId: "G-7ZNKBHY3F8"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes),
              provideFirebaseApp(() => initializeApp(firebaseConfig)),
              provideFirestore(() => getFirestore())
            ]
};
