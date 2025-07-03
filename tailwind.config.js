/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'dotted-net': 'radial-gradient(circle, #6b6b6b 1px, transparent 1px), radial-gradient(circle, #6b6b6b 1px, transparent 1px)'
  		},
  		fontFamily: {
  			gMedium: [
  				'gMedium',
  				'sans-serif'
  			],
  			quicksand: [
  				'Quicksand',
  				'sans-serif'
  			]
  		},
  	  padding:{
        "block-padding":"24px",
      },
      colors:{
        "pri":"#111827",
        "sec":"#374151"
      }

  	}
  },
  plugins: [require("tailwindcss-animate")],
};
