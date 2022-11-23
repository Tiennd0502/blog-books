module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@root(.*)$': '<rootDir>/src$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@__mocks__(.*)$': '<rootDir>/src/__mocks__$1',
    '^@pages(.*)$': '<rootDir>src/pages$1',
    '^@styles(.*)$': '<rootDir>src/styles$1',
    '^@themes(.*)$': '<rootDir>src/themes$1',
    '^@helpers(.*)$': '<rootDir>src/helpers$1',
    '^@constants(.*)$': '<rootDir>src/constants$1',
    '^@interfaces(.*)$': '<rootDir>src/interfaces$1',
    '^@components(.*)$': '<rootDir>src/components$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
