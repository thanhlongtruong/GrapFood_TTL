/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // shadow: {
      //   shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      // },
      gridTemplateColumns: {
        '4-[0-288px]': 'repeat(4, minmax(0, 288px))',
        '3-[0-384px]': 'repeat(3, minmax(0, 384px))',
        '6-[0-179px]': 'repeat(6, minmax(0, 179px))',
      },
      fontFamily: {
        'ttl-edit1':
          'Inter Grab Web,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      },
    },
  },
  plugins: [],
};
