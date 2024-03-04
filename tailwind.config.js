/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      'kavoon': ['Kavoon', 'cursive'],
      'jacques-francois': ['Jacques Francois', 'cursive']
    },
    extend: {
      writingMode: {
        'vertical': 'vertical-rl', 
      },
=======
    extend: {
      boxShadow : {
        main: "0 0px 2px 2px rgba(0,0,0,0.3)"}

    },
  },
  plugins: [],
}