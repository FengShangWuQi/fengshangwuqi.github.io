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
    ['glass', {
      '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
      'backdrop-filter': 'blur(16px) saturate(180%)',
    }],
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
          --color-bg: #0b0b12;
          --color-text: #e4e4ec;
          --color-text-light: #b0b0c4;
          --color-text-muted: #6a6a82;
          --color-border: #2a2a3c;
          --color-surface: #14141f;
          --color-white: #fff;
          --color-brand-blue: #7b8ad0;
          --color-brand-purple: #a483c8;
          --color-brand-blue-deep: #8090d0;
          --color-brand-purple-deep: #a87ecf;
          --color-brand-teal-deep: #6aafcf;
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
