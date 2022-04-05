/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: {
    '@primary-color': '#20283b',
    '@text-color': '#FFF',
    '@text-color-secondary': 'rgba(0, 0, 0, 0.8)',
  },

  webpack(config) {
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
