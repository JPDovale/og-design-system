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
  darkMode: {
    dark: {...themes.dark, appBg: 'black'},
    light: {...themes.normal, appBg: 'red'}
  },
  docs: {
    theme: themes.dark
  },
  themes: {
    theme: themes.dark
  }
}