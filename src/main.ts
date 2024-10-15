import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient
import { appConfig } from './app/app.config'; // Import your app configuration if necessary

// Provide HttpClient at the application level
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provide HttpClient here
    // You can add other providers like your routing configuration or state management
  ]
}).catch((err) => console.error(err));
