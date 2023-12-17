/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'audio':['Audiowide', 'sans-serif'],
        // 'sans': ['-apple-system', 'BlinkMacSystemFont'],
        // 'serif': ['Georgia', 'Cambria'],
      //  'mono': ['SFMono-Regular', 'Menlo'],},
  },
  plugins: [],
}
 }
}