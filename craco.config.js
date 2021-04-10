const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@mydata": path.resolve(__dirname, "src/assets/data.json"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
};
