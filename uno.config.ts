import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],

  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
  },

  preflights: [
    {
      getCSS: () => `
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --color-bg: #000;
          --color-text: #e4e4ec;
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
            Arial, sans-serif;
          background: var(--color-bg);
          color: var(--color-text);
          min-height: 100vh;
          overflow: hidden;
        }

        button {
          font: inherit;
          color: inherit;
          background: transparent;
          border: none;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
      `,
    },
  ],
})
