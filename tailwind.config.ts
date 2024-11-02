import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        border: "hsl(var(--border))"
      },
      backgroundColor: {
        background: "hsl(var(--background))"
      }
    },
  },
  plugins: [],
}

export default config
