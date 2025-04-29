import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyBXSTKGMRqlfXvIuXz5pP-Jgu0RTitX3B4',
  authDomain: 'larissalinda-meubem.firebaseapp.com',
  projectId: 'larissalinda-meubem',
  storageBucket: 'larissalinda-meubem.firebasestorage.app',
  messagingSenderId: '513751179817',
  appId: '1:513751179817:web:cf9fd222b48abbf33bf238',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
