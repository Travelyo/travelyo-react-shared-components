/** @type {import('tailwindcss').Config} */

const extendedColors = {
  'shark-950': '#262626',
  'shark-900': '#3D3D3D',
  'shark-800': '#454545',
  'shark-700': '#4F4F4F',
  'shark-600': '#5D5D5D',
  'shark-500': '#6D6D6D',
  'shark-400': '#888888',
  'shark-300': '#B0B0B0',
  'shark-200': '#D1D1D1',
  'shark-100': '#E7E7E7',
  'shark-50': '#F6F6F6',
  'shark-25': '#F7F7F7',
  'brand-950': '#152656',
  'brand-900': '#1C3D8D',
  'brand-800': '#1844B3',
  'brand-700': '#1854DD',
  'brand-600': '#266DF1',
  'brand-500': '#3689FB',
  'brand-400': '#5BABFE',
  'brand-300': '#90C8FF',
  'brand-200': '#BCDEFF',
  'brand-100': '#DAEAFF',
  'brand-50': '#EFF7FF',
  'info-light': "#DBE9FF",
  'snow': '#F8F8F8',
  'light': '#D1D1D1',
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All component files
  ],
  theme: {
    extend: {
      colors: extendedColors,
    },
  },
  corePlugins: {
    preflight: false, // disable initial styles reset
    container: false, // enable when we decide to migrate from bootstrap to Tailwind
  },
  plugins: [],
};
