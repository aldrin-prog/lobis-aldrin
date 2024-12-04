module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a200ff",
                    
          "secondary": "#00b5b1",
                    
          "accent": "#00a0ae",
                    
          "neutral": "#0a0917",
                    
          "base-100": "#1a262c",
                    
          "info": "#53d5ff",
                    
          "success": "#00995c",
                    
          "warning": "#bd5a00",
                    
          "error": "#ff85aa",
        },
        },
      ],
    },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};