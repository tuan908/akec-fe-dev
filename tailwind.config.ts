import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        footer: '#00130F',
        dark: '#333',
        hover: '#eaeaea',
        indicatorActive: 'rgb(116, 116, 116)',
        indicatorInactive: 'rgb(187, 187, 187)'
      },
      minWidth: { '1/3': 'calc(100% / 3)' },
      width: {
        '1/7': 'calc(100% / 7)',
        '2/7': 'calc(100% / 7 * 2)',
        '3/7': 'calc(100% / 7 * 3)',
        '4/7': 'calc(100% / 7 * 4)',
        '5/7': 'calc(100% / 7 * 5)',
        '6/7': 'calc(100% / 7 * 6)',
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/9': 'calc(100% / 9)',
        '2/9': 'calc(100% / 9 * 2)',
        '4/9': 'calc(100% / 9 * 4)',
        '5/9': 'calc(100% / 9 * 5)',
        '7/9': 'calc(100% / 9 * 7)',
        '8/9': 'calc(100% / 9 * 8)',
        '9/10': '90%',
        '9/20': '45%',
        '19/20': '95%'
      },
      zIndex: {
        9999: '9999'
      }
    }
  },
  plugins: []
}

export default config