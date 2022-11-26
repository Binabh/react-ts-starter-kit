const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
    '\\.jpg': '<rootDir>/__mocks__/svg.js',
    '\\.png': '<rootDir>/__mocks__/svg.js',
  },
};
