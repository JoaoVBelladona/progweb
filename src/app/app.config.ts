import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
    apiKey: "AIzaSyDrfF650QpM7cq6VDtkcI2UyNyVRnj3HMo",
    authDomain: "praticaangularfirebase.firebaseapp.com",
    projectId: "praticaangularfirebase",
    storageBucket: "praticaangularfirebase.firebasestorage.app",
    messagingSenderId: "550751319305",
    appId: "1:550751319305:web:02f4bf8e2ac800008fcfd8"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
