'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined'
      }
    }
  }
});

export default theme;