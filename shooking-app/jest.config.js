export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.test.js",
    "<rootDir>/src/__tests__/**/*.test.jsx",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
