

module.exports = {
  roots: ['<rootDir/>/tests'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: "(/tests/.*|(\\.|/)(test)\\.(js?|ts?)$",
  moduleFileExtensions: ["ts", "js"]
};