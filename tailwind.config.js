module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'nav-img': "url('./images/headerbg-min.jpg')",
        'repair-service-img': "url('./images/header3.jpg')",
        'repair-service2-img': "url('./images/Rectangle 39@1X.png')",
        'about-us2-img': "url('./images/IMG_2592.jpg')",
        'client-img': "url('./images/client.png')",
        'contact1-img': "url('./images/IMG_2592.jpg')",
        'contact2-img': "url('./images/Rectangle 39@1X.png')",
        'footer-img': "url('./images/Rectangle 44@1X.png')",

       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
