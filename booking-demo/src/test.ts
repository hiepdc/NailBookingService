// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);

// Then we find one component test.
//const context = require.context('./', true, /booking.service\.spec\.ts$/);

// Then we find module admin test.
// const context = require.context('app/admin/', true, /\.spec\.ts$/);

// Then we find module core test.
// const context = require.context('app/', true, /apitest\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
