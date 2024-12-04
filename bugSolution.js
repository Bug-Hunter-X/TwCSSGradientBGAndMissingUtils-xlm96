```javascript
// Ensure your tailwind.config.js includes the necessary configurations for the colors you're using.
// If using plugins, make sure they're configured correctly.

// Verify your Tailwind CSS version supports the used classes. 
// You may need to run `npm install -D tailwindcss` to update to the latest version.
// Or add the necessary color palette to your `tailwind.config.js`:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#your-blue-hex-code',
        'custom-purple': '#your-purple-hex-code',
      }
    },
  },
  plugins: [],
}

<div class="bg-gradient-to-r from-custom-blue to-custom-purple text-white p-4 rounded-lg shadow-md">
  <p>This is some text with gradient background.</p>
</div>
```