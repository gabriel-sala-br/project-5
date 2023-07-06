module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "./next/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/tests/setupTests.ts"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
};
