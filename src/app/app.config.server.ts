import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient } from '@angular/common/http'; // Import the new HttpClient API
// Removed withServerTransition import as it is not exported by @angular/platform-server
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(), // Provide HttpClient for server-side as well
    // Removed withServerTransition as it is not exported by @angular/platform-server
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
