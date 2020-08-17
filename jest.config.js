'use strict'

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageDirectory: './out/coverage',
  collectCoverageFrom: ['./src/**/*.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './out/',
      },
    ],
  ],
}
