/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import './App.css';
import { ThemeProvider } from 'emotion-theming';
import { Box } from 'rebass';

const theme = {
  space: [0, 4, 8, 16, 32],
  colors: {
    offwhite: '#FFF6EF',
    muddy: '#A15522',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box
          css={css({
            margin: '16px',
            padding: '16px',
            backgroundColor: theme.colors.offwhite,
            color: theme.colors.muddy,
          })}
        >
          This section uses Emotion's css prop!
        </Box>

        <Box m={3} p={3} backgroundColor="offwhite" color="muddy">
          This section uses Rebass components and style props!
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
