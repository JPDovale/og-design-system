import { themes } from '@storybook/theming'

import '../src/styles/global/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  },
  darkMode: {
    dark: {...themes.dark, appBg: 'black'},
    light: {...themes.normal, appBg: 'red'}
  },
  themes: {
    theme: themes.dark
  }
}