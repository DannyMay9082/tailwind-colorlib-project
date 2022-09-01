/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'blogImage-1': "url('./img/blog-thumbnail/blog-1.jpg')",
        'blogImage-2': "url('./img/blog-thumbnail/blog-2.jpg')",
        'blogImage-3': "url('./img/blog-thumbnail/blog-3.jpg')",
        'blogImage-4': "url('./img/blog-thumbnail/blog-4.jpg')",
      },
      borderRadius: { '5xl': '30px' },
      boxShadow: {
        'button-focus': '0 0 0 0.2rem rgb(38 143 255 / 50%)'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primaryRed': '#ff6363',
        'primaryRedLight': '#ff7777',
        'primaryBlue': '#202040',
        'primaryGrayDark': 'rgba(255, 255, 255, 0.1)',
        'primaryBlueDark': '#000839',
        'primaryGray': '#a0a4ab',
        'primaryGrayLight': '#F2F5F9',
        'primaryBlueLight': '#0062cc',
        'primaryBlueLightFaded': 'rgba(0,98,204,.4)',
        'secondaryGray': '#F8F9FA',
        'blogPostGray': '#EBF0F6'
        //
      }
    },
  },
  plugins: [],
}
