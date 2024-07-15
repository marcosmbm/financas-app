module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".ios.jsx",
          ".android.jsx",
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx",
        ],
        root: ["."],
        alias: {
          "@styles": "./src/styles",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@services": "./src/services",
          "@models": "./src/models",
          "@routes": "./src/routes",
        },
      },
    ],
    ["module:react-native-dotenv"],
    "react-native-reanimated/plugin",
  ],
};
