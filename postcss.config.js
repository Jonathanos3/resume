const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    whitelist: ['body', 'html'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},

    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  }
}


