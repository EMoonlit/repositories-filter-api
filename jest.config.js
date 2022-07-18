module.exports = {
  roots: ['<rootDir>/api/tests'],
  collectCoverageFrom: [
    '<rootDir>/api/src/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/**/*.test.ts']
}