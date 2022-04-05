const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#0f0' },

  webpack(config) {
    return config;
  },
});
