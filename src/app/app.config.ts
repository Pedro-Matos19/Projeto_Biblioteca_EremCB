import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyB80f0VyL5L1dBQm25LZXOnWJcEwBEyT2U',
  authDomain: 'biblioteca-4aefe.firebaseapp.com',
  projectId: 'biblioteca-4aefe',
  storageBucket: 'biblioteca-4aefe.firebasestorage.app',
  messagingSenderId: '854013119745',
  appId: '1:854013119745:web:fbb0e9c552fa10e17e5f00',
};


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes),
              provideFirebaseApp(() => initializeApp(firebaseConfig)),
              provideFirestore(() => getFirestore())
            ]
};
