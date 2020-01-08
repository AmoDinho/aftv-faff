

module.exports = {
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/tests/.*|(\\.|/)test)\\.ts?$',
  moduleFileExtensions: ["ts", "js"]
};