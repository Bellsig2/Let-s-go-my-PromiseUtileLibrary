const path = require("path");

module.exports = {
  entry: "/src/main.js", //진입점
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    //__dirname : 절대경로를 찾아줌
    //path.resolve : 절대경로 뒤에 붙는 경로를 붙여줌(절대경로/dist)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]], //코드를 가공
          },
        },
      },
    ],
  },
};
