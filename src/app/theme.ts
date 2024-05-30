'use client';

import { createTheme } from '@mui/material/styles';
import { Bungee_Spice } from 'next/font/google';

const bungeeSpice = Bungee_Spice({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiPaper: {
      defaultProps: {
        sx: {
          p: 2
        },
        elevation: 3
      }
    },
    MuiDivider: {
      defaultProps: {
        sx: {
          m: 2
        }
      }
    },
    MuiStack: {
      defaultProps: {
        spacing: 1
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'title' },
          component: 'h1',
          style: ({ theme }) => ({
            ...theme.typography.h1,
            fontFamily: bungeeSpice.style.fontFamily
          })
        }
      ]
    }
  },
  typography: {
    h1: {
      fontFamily: bungeeSpice.style.fontFamily
    }
  }
});

export default theme;