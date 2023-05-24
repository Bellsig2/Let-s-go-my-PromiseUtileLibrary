export default {
  input: "src/main.js",
  output: [
    {
      file: "build/bundle.js",
      format: "umd",
      name: "PomiseOption",
    },
    // {
    //   file: "dist/bundle-es.js",
    //   format: "es",
    // },
  ],
};
