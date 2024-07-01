module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ],
  assumptions: {
    "setPublicClassFields": true,
    "privateFieldsAsSymbols": true,
  }
  // env: {
  //   production: {
  //     plugins: ['react-native-paper/lib/module/src/babel/index.js'],
  //   },
  // },
};
