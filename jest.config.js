module.exports = {
  testPathIgnorePatterns: ['<rootDir>/src/server/public/'],
  modulePathIgnorePatterns: ['<rootDir>/src/server/public/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
};
