// Este archivo es requerido por karma.conf.js y carga recursivamente todos los archivos .spec y del marco.
(window as any)['env'] = (window as any)['env'] || {};
(window as any)['env']['apiUrl'] = (window as any)['env']['apiUrl'] || 'http://vicky-container-back.brazilsouth.azurecontainer.io/api/employee'; // Valor predeterminado para las pruebas

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Primero, inicializa el entorno de pruebas de Angular.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// Declaramos require.context para evitar el error de TypeScript
declare const require: {
    context(path: string, deep?: boolean, filter?: RegExp): {
        keys(): string[];
        <T>(id: string): T;
    };
};

// Luego, encontramos todas las pruebas.
const context = require.context('./', true, /\.spec\.ts$/);
// Y cargamos los módulos.
context.keys().map(context);

