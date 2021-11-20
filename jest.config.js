module.exports = {
  testPathIgnorePatterns: ['<rootDir>/src/server/public/'],
  modulePathIgnorePatterns: ['<rootDir>/src/server/public/'],
  setupFilesAfterEnv: ['<rootDir>/src/client/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/client/__mocks__/fileMock.js',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^.+\\.svg$': '<rootDir>/node_modules/jest-svg-transformer',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
