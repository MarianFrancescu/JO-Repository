import { createTheme } from '@mui/material';

export function getAppTheme(mode = 'dark') {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#22d3ee',
      },
      background: {
        default: 'transparent',
        paper: isDark ? 'rgba(15, 23, 42, 0.66)' : 'rgba(255, 255, 255, 0.86)',
      },
    },
    typography: {
      fontFamily: 'Manrope, Segoe UI, Helvetica Neue, sans-serif',
      h1: {
        fontFamily: 'IBM Plex Sans, Manrope, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: 'IBM Plex Sans, Manrope, sans-serif',
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      body1: {
        fontSize: '1.02rem',
        lineHeight: 1.75,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? 'rgba(2, 10, 26, 0.65)' : 'rgba(247, 250, 252, 0.95)',
            color: isDark ? '#e6f2f8' : '#0f172a',
            '& fieldset': {
              borderColor: 'rgba(56, 189, 248, 0.28)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(34, 211, 238, 0.55)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#22d3ee',
              borderWidth: '1px',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? '#93c5d6' : '#0f4a5c',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  });
}
