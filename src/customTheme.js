// theme.js
import { theme } from '@chakra-ui/core';

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    blue: {
      300: '#63B3ED',
    },
  },
};

export default customTheme;
