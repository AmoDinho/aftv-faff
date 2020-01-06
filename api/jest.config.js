const { jsWithTs: tsjPreset } = require('ts-jest/presets')

module.exports = {
  bail: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    ...tsjPreset.transform,
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: "(/tests/.*|(\\.|/)(test)\\.(js?|ts?)$",
  moduleFileExtensions: ["ts", "js"],
  globals: {
    'ts-jest': {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
      }
    }
  }
};