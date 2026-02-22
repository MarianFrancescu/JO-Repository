import { useMemo, useState } from 'react';
import { CssBaseline, Link, ThemeProvider, Typography } from '@mui/material';
import MaterialsPage from './pages/MaterialsPage';
import PortfolioPage from './pages/PortfolioPage';
import { getAppTheme } from './theme/appTheme';

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const theme = useMemo(() => getAppTheme(themeMode), [themeMode]);
  const rawPath = window.location.pathname || '/';
  const path = rawPath.length > 1 ? rawPath.replace(/\/$/, '') : rawPath;
  const isPortfolioRoute = path === '/' || path === '/portfolio';
  const isMaterialsRoute = path === '/materials';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className={`min-h-screen ${themeMode === 'dark' ? 'theme-dark' : 'theme-light'} ${
          themeMode === 'dark'
            ? 'bg-[radial-gradient(circle_at_12%_-15%,rgba(6,182,212,0.22),transparent_45%),radial-gradient(circle_at_100%_0%,rgba(29,78,216,0.22),transparent_40%),linear-gradient(180deg,#020617,#03121d)] text-slate-100'
            : 'bg-[radial-gradient(circle_at_8%_-12%,rgba(56,189,248,0.2),transparent_48%),radial-gradient(circle_at_100%_0%,rgba(14,165,233,0.15),transparent_44%),linear-gradient(180deg,#f8fcff,#eef6ff)] text-slate-900'
        }`}
      >
        <div
          className={`pointer-events-none fixed inset-0 z-0 ${
            themeMode === 'dark'
              ? 'bg-[linear-gradient(rgba(14,58,78,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(14,58,78,0.25)_1px,transparent_1px)]'
              : 'bg-[linear-gradient(rgba(148,199,223,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,199,223,0.35)_1px,transparent_1px)]'
          } bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]`}
        />

        {isMaterialsRoute ? (
          <MaterialsPage />
        ) : isPortfolioRoute ? (
          <PortfolioPage
            themeMode={themeMode}
            onToggleTheme={() =>
              setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
            }
          />
        ) : (
          <main className="relative z-10 mx-auto flex w-[min(980px,92%)] flex-col items-start gap-4 py-14 md:py-16">
            <Typography component="h1" className="!text-3xl !font-bold">
              Route not found
            </Typography>
            <Typography className="!text-slate-200">
              Use one of the available routes:
            </Typography>
            <div className="flex items-center gap-4">
              <Link href="/portfolio" underline="hover" className="!text-cyan-200">
                /portfolio
              </Link>
              <Link href="/materials" underline="hover" className="!text-cyan-200">
                /materials
              </Link>
            </div>
          </main>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
