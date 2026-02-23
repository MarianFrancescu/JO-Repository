import { CssBaseline, Link, ThemeProvider, Typography } from '@mui/material';
import MaterialsPage from './pages/MaterialsPage';
import PortfolioPage from './pages/PortfolioPage';
import { getAppTheme } from './theme/appTheme';

function App(): JSX.Element {
  const theme = getAppTheme();
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routePrefix = basePath || '';
  const portfolioPath = `${routePrefix}/portfolio`;
  const materialsPath = `${routePrefix}/materials`;
  const rawPath = window.location.pathname || '/';
  const path = rawPath.length > 1 ? rawPath.replace(/\/$/, '') : rawPath;
  const normalizedPath =
    routePrefix && path.startsWith(routePrefix)
      ? path.slice(routePrefix.length) || '/'
      : path;
  const isPortfolioRoute =
    normalizedPath === '/' || normalizedPath === '/portfolio';
  const isMaterialsRoute = normalizedPath === '/materials';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="min-h-screen theme-dark bg-[radial-gradient(circle_at_12%_-15%,rgba(6,182,212,0.22),transparent_45%),radial-gradient(circle_at_100%_0%,rgba(29,78,216,0.22),transparent_40%),linear-gradient(180deg,#020617,#03121d)] text-slate-100"
      >
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(14,58,78,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(14,58,78,0.25)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]"
        />

        {isMaterialsRoute ? (
          <MaterialsPage />
        ) : isPortfolioRoute ? (
          <PortfolioPage />
        ) : (
          <main className="relative z-10 mx-auto flex w-[min(980px,92%)] flex-col items-start gap-4 py-14 md:py-16">
            <Typography component="h1" className="!text-3xl !font-bold">
              Route not found
            </Typography>
            <Typography className="!text-slate-200">
              Use one of the available routes:
            </Typography>
            <div className="flex items-center gap-4">
              <Link href={portfolioPath} underline="hover" className="!text-cyan-200">
                /portfolio
              </Link>
              <Link href={materialsPath} underline="hover" className="!text-cyan-200">
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
