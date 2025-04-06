// tailwind.config.js
module.exports = {
  content: [
    // ... your existing content config
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      images: {
        domains: ["lh3.googleusercontent.com", "img.daisyui.com"],
      },
    },
  },
  plugins: [
    // ... your existing plugins
  ],
};