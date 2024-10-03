module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage'),  // Asegúrate de agregar esto
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['progress', 'junit', 'coverage'],  // Agregar 'coverage' aquí
    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/'), // Especificar el directorio para la cobertura
      subdir: '.',
      reporters: [
        { type: 'html' },      // Generar un informe HTML
        { type: 'lcov' },      // Generar un informe LCOV
        { type: 'text-summary' } // Resumen en texto en la consola
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true
  });
};
