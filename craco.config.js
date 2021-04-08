const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
};
