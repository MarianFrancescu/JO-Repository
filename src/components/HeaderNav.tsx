import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Studies', href: '#studies' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
] as const;

interface HeaderNavProps {
  name?: string;
}

function HeaderNav({ name = 'Portfolio' }: HeaderNavProps): JSX.Element {
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo-mark.svg`;
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routePrefix = basePath || '';
  const materialsPath = `${routePrefix}/materials`;
  const [activeHref, setActiveHref] = useState<string>('#about');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    function updateActiveFromHash() {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    }

    function updateActiveFromScroll() {
      const sectionIds = navItems.map((item) => item.href.slice(1));
      const reachedPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (reachedPageBottom) {
        setActiveHref('#contact');
        return;
      }

      const hashHref = window.location.hash;
      if (sectionIds.includes(hashHref.slice(1))) {
        const hashSection = document.getElementById(hashHref.slice(1));
        if (hashSection) {
          const rect = hashSection.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            setActiveHref(hashHref);
            return;
          }
        }
      }

      let current = '#about';
      let bestTop = -Infinity;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();
        if (rect.top <= 130 && rect.top > bestTop) {
          bestTop = rect.top;
          current = `#${id}`;
        }
      }

      setActiveHref(current);
    }

    updateActiveFromHash();
    updateActiveFromScroll();
    window.addEventListener('hashchange', updateActiveFromHash);
    window.addEventListener('scroll', updateActiveFromScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', updateActiveFromHash);
      window.removeEventListener('scroll', updateActiveFromScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-slate-950/55 backdrop-blur-md">
      <div className="mx-auto hidden h-16 w-[min(980px,92%)] items-stretch gap-5 md:flex">
        <div className="flex items-center gap-2">
          <img src={logoSrc} alt="App logo" className="h-9 w-9 rounded-md" />
          <Typography className="flex items-center !text-base !font-semibold !text-slate-100">
            {name}
          </Typography>
        </div>
        <nav
          aria-label="Section navigation"
          className="no-scrollbar flex h-full flex-1 items-stretch justify-end gap-1 overflow-x-auto"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              underline="none"
              onClick={() => setActiveHref(item.href)}
              aria-current={activeHref === item.href ? 'page' : undefined}
              className={`flex items-center whitespace-nowrap !px-4 !text-base !font-semibold ${
                activeHref === item.href
                  ? '!bg-cyan-400/20 !text-cyan-100'
                  : '!text-slate-300 hover:!bg-white/5 hover:!text-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={materialsPath}
            underline="none"
            className="flex items-center whitespace-nowrap !px-4 !text-base !font-semibold !bg-blue-500/20 !text-blue-100 hover:!bg-blue-500/30"
          >
            Materials
          </Link>
        </nav>
      </div>

      <div className="mx-auto flex h-14 w-[min(980px,92%)] items-center justify-between md:hidden">
        <div className="flex items-center gap-2">
          <img src={logoSrc} alt="App logo" className="h-8 w-8 rounded-md" />
          <Typography className="max-w-[65vw] truncate !text-sm !font-semibold !text-slate-100">
            {name}
          </Typography>
        </div>

        <IconButton
          aria-label="Open navigation menu"
          onClick={() => setIsSidebarOpen(true)}
          className="!text-slate-100"
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'rgba(2, 10, 26, 0.96)',
            color: '#e2ecf4',
            borderRight: '1px solid rgba(14, 116, 144, 0.45)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        <div className="flex h-16 items-center border-b border-cyan-900/60 px-4">
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="App logo" className="h-8 w-8 rounded-md" />
            <Typography className="!text-base !font-semibold !text-slate-100">
              {name}
            </Typography>
          </div>
        </div>

        <List className="!pt-2">
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              selected={activeHref === item.href}
              onClick={() => {
                setActiveHref(item.href);
                setIsSidebarOpen(false);
              }}
              className={`!mx-2 !mb-1 !rounded-lg ${
                activeHref === item.href
                  ? '!bg-cyan-500/20 !text-cyan-100'
                  : '!text-slate-200'
              }`}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            component="a"
            href={materialsPath}
            onClick={() => setIsSidebarOpen(false)}
            className="!mx-2 !mb-1 !rounded-lg !bg-blue-500/20 !text-blue-100 hover:!bg-blue-500/30"
          >
            <ListItemText primary="Materials" />
          </ListItemButton>
        </List>
      </Drawer>
    </header>
  );
}

export default HeaderNav;
