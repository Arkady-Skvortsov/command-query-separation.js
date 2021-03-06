module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  coverageReporters: ["json"],
  moduleFileExtensions: ["js", "ts", "node"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
