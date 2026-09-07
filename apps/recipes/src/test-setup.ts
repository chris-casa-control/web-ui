import {
  setupZonelessTestEnv,
  SetupOptions,
} from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
} as SetupOptions);
