import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './app/core/services/interceptors/error-interceptor';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(App, {
    ...appConfig,
    providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
    withInterceptors([errorInterceptor])
  )
    ]
})
.catch((err) => console.error(err));
