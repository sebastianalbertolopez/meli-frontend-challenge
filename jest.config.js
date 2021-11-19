module.exports = {
  testPathIgnorePatterns: ['<rootDir>/src/server/public/'],
  modulePathIgnorePatterns: ['<rootDir>/src/server/public/'],
  setupFilesAfterEnv: ['<rootDir>/src/client/setupTests.js'],
  testEnvironment: 'jsdom',
};
