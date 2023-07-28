module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@constants": "./src/constants",
          "@assets": "./src/assets",
          "@api": "./src/api",
          "@hooks": "./src/hooks",
          src: "./src",
        },
      },
    ],
  ],
};
