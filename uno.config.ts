import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],

  theme: {
    colors: {
      text: 'var(--color-text)',
      'text-light': 'var(--color-text-light)',
      'text-muted': 'var(--color-text-muted)',
      border: 'var(--color-border)',
      surface: 'var(--color-surface)',
    },
    breakpoints: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
  },

  rules: [
    ['tabular-nums', { 'font-variant-numeric': 'tabular-nums' }],
  ],

  preflights: [
    {
      getCSS: () => `
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --color-bg: #fafafa;
          --color-text: #1a1a1a;
          --color-text-light: #555;
          --color-text-muted: #888;
          --color-border: #ccc;
          --color-surface: #f0f0f0;
          --color-white: #fff;
          --color-brand-blue: #6875a5;
          --color-brand-purple: #8b6aae;
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
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        button {
          font: inherit;
        }
      `,
    },
  ],
})
