const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#20283B",
    "@link-color": "#FF7746",
    "@heading-color": "#FFFFFF",
    "@text-color": "#FFFFFF",
    "@text-color-secondary": "rgba(0, 0, 0, 0.8)",
    "@border-radius-base": "8px",
    "@border-color-base": "#83B1D4",
  },

  webpack(config) {
    return config;
  },
});
