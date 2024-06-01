module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '\\.(js|jsx|ts|tsx)': 'babel-jest',
      '\\.(svg)$': '<rootDir>/svgTransform.js',
    },
    moduleNameMapper: {
      '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
      '\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js',
      '\\.(png)$': '<rootDir>/src/__mocks__/pngMock.js',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/__tests__/**/*.test.(js|jsx)'],
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.pnp\\.[^\\/]+$',
      '\\.(css|less|sass|scss)$',
      '\\.(svg|ico|jpg|jpeg|png|gif|webp)$',
    ],
  };
          