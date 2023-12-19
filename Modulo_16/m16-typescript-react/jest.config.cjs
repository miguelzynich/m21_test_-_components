module.exports = {
  preset: 'ts-jest/presets/default',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!.*\\.(js|jsx|ts|tsx)$)'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'node',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
};
