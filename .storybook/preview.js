import { wd } from 'paths.macro';

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
    workingDir: wd || '/Usr/vilva/Desktop/project-name',
    branch: 'branch1',
  },
}