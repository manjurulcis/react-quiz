module.exports = {
    preset: 'react-native',
    moduleNameMapper: {
        // see: https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-517944368
        "^@/(.*)$": "<rootDir>/pages/$1",
    },
    globals: {
        "ts-jest": {
            useESM: true,
        }
    },
    "transformIgnorePatterns": [
        "node_modules/(?!(@react-native|react-native|react-native-code-push)/)"
      ],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue'],
    moduleDirectories: ["node_modules", "pages"],
};