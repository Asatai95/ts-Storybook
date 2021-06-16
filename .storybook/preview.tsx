import { wd } from 'paths.macro';
import { ThemeProvider } from '@storybook/theming';
import { StoryContext } from '@storybook/react';
import { theme } from './theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySource: {
    repository: `https://github.com/${process.env.GIT_ACCOUNT_NAME}/${process.env.GIT_REPOSITORY_NAME}`,
    workingDir: wd || `${process.env.WORKING_DIR}`,
    branch: 'master',
  },
};

// テーマの設定
const themeProvider = (StoryFn: Function, context: StoryContext) => {
  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
    </ThemeProvider>
  );
};

export const Decorators = [themeProvider];